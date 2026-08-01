import { NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Invalid password.' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true, message: 'Access granted.' }, { status: 200 });
    response.cookies.set({
      name: 'inquiry-admin-auth',
      value: 'true',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to verify access right now.' },
      { status: 500 }
    );
  }
}
