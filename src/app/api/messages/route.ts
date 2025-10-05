import { NextRequest, NextResponse } from 'next/server';
import { messageDB } from '@/lib/database';

export async function GET() {
  return NextResponse.json(messageDB.getPositive());
}

export async function POST(request: NextRequest) {
  const { name, message } = await request.json();
  const result = messageDB.add(name, message);
  return NextResponse.json({ id: result.lastInsertRowid, name, message });
}