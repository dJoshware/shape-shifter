import { NextResponse } from 'next/server';
import { createServClient } from '@/lib/supabaseServerClient';

export const runtime = 'nodejs';

// GET: handles email confirmation/magic-link redirect from Supabase
export async function GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (code) {
        const supabase = await createServClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        // Cross-device PKCE mismatch is expected — continue regardless
        if (error) console.error('Code exchange failed:', error.message);
    }

    return NextResponse.redirect(new URL('/auth/confirmed', url.origin));
}

// POST: session sync called by SupabaseProvider on auth state changes
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
