import { NextResponse } from 'next/server';
import { createServClient } from '@/lib/supabaseServerClient';

export const runtime = 'nodejs';

export async function POST(req: Request) {
    const supabase = await createServClient();
    const { event, session } = await req.json();

    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        await supabase.auth.setSession(session);
    } else if (event === 'SIGNED_OUT') {
        await supabase.auth.signOut();
    }

    return NextResponse.json({ ok: true });
}
