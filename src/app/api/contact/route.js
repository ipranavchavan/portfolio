import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { list, put } from '@vercel/blob';

const inquiryStorePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const shouldUseFileStorage = process.env.VERCEL !== '1' || process.env.ALLOW_FILE_STORAGE === 'true';
const hasBlobStorageToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_TOKEN);
const blobPath = 'inquiries.json';

async function saveInquiryToGoogleSheets(inquiry) {
  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;

  if (!endpoint) {
    return false;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      token: process.env.GOOGLE_SHEETS_WEB_APP_TOKEN,
      inquiry,
    }),
    cache: 'no-store',
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Google Sheets could not save the inquiry.');
  }

  return true;
}

async function ensureStoreFile() {
  if (!shouldUseFileStorage) {
    return;
  }

  await fs.mkdir(path.dirname(inquiryStorePath), { recursive: true });

  try {
    await fs.access(inquiryStorePath);
  } catch {
    await fs.writeFile(inquiryStorePath, '[]', 'utf8');
  }
}

async function readInquiriesFromBlob() {
  const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_TOKEN;

  if (!token) {
    return [];
  }

  const { blobs } = await list({ prefix: blobPath, token });
  if (blobs.length === 0) {
    return [];
  }

  const response = await fetch(blobs[0].url);
  const fileContents = await response.text();
  return JSON.parse(fileContents);
}

async function persistInquiryToBlob(inquiry) {
  const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_TOKEN;

  if (!token) {
    return false;
  }

  const existing = await readInquiriesFromBlob();
  const updatedStore = [inquiry, ...existing];
  await put(blobPath, JSON.stringify(updatedStore, null, 2), {
    access: 'private',
    addRandomSuffix: false,
    token,
  });

  return true;
}

async function readInquiries() {
  if (hasBlobStorageToken) {
    return await readInquiriesFromBlob();
  }

  if (!shouldUseFileStorage) {
    return [];
  }

  await ensureStoreFile();
  const fileContents = await fs.readFile(inquiryStorePath, 'utf8');
  return JSON.parse(fileContents);
}

async function persistInquiry(inquiry) {
  if (hasBlobStorageToken) {
    return await persistInquiryToBlob(inquiry);
  }

  if (!shouldUseFileStorage) {
    return false;
  }

  const existing = await readInquiries();
  const updatedStore = [inquiry, ...existing];
  await fs.writeFile(inquiryStorePath, `${JSON.stringify(updatedStore, null, 2)}\n`, 'utf8');
  return true;
}

export async function GET() {
  try {
    const inquiries = await readInquiries();
    return NextResponse.json({ success: true, inquiries }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to load inquiries right now.' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const values = Object.fromEntries(
      Object.entries(payload).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value])
    );

    if (!values.name || !values.email || !values.subject || !values.message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all fields before sending your message.' },
        { status: 400 }
      );
    }

    if (!emailPattern.test(values.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const inquiry = {
      id: randomUUID(),
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      createdAt: new Date().toISOString(),
    };

    let wasSavedToGoogleSheets = false;

    try {
      wasSavedToGoogleSheets = await saveInquiryToGoogleSheets(inquiry);
    } catch {
      return NextResponse.json(
        { success: false, message: 'Unable to save your inquiry right now. Please try again later.' },
        { status: 502 }
      );
    }

    const wasPersisted = await persistInquiry(inquiry);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully — I will reply shortly.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Unable to store your inquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
