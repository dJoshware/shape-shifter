import { NextResponse } from 'next/server';
import { createServClient } from '@/lib/supabaseServerClient';

export const runtime = 'nodejs';

export async function POST() {
  const supabase = await createServClient();
  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
