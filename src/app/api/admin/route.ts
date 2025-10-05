import { NextRequest, NextResponse } from 'next/server';
import { messageDB } from '@/lib/database';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== 'Bearer admin123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const all = messageDB.getAll();
  return NextResponse.json({
    positive: all.filter(m => m.sentiment === 'positive'),
    negative: all.filter(m => m.sentiment === 'negative')
  });
}

export async function DELETE(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== 'Bearer admin123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { id } = await request.json();
  messageDB.delete(id);
  return NextResponse.json({ success: true });
}