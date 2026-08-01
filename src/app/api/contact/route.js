import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const inquiryStorePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(inquiryStorePath), { recursive: true });

  try {
    await fs.access(inquiryStorePath);
  } catch {
    await fs.writeFile(inquiryStorePath, '[]', 'utf8');
  }
}

async function readInquiries() {
  await ensureStoreFile();
  const fileContents = await fs.readFile(inquiryStorePath, 'utf8');
  return JSON.parse(fileContents);
}

async function sendEmail(inquiry) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const smtpTo = process.env.SMTP_TO || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: smtpFrom,
    to: smtpTo,
    replyTo: inquiry.email,
    subject: `[Portfolio Inquiry] ${inquiry.subject}`,
    text: `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nSubject: ${inquiry.subject}\n\nMessage:\n${inquiry.message}`,
    html: `
      <div>
        <p><strong>Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Subject:</strong> ${inquiry.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiry.message.replace(/\n/g, '<br />')}</p>
      </div>
    `,
  });
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

    const existing = await readInquiries();

    const inquiry = {
      id: randomUUID(),
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      createdAt: new Date().toISOString(),
    };

    const updatedStore = [inquiry, ...existing];
    await fs.writeFile(inquiryStorePath, `${JSON.stringify(updatedStore, null, 2)}\n`, 'utf8');

    try {
      await sendEmail(inquiry);
    } catch {
      return NextResponse.json(
        { success: true, message: 'Message saved successfully. Email delivery is currently unavailable.' },
        { status: 200 }
      );
    }

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
