import { NextResponse } from 'next/server';
import { createServClient } from '@/lib/supabaseServerClient';
import { createClient as createAdmin } from '@supabase/supabase-js';

function getSupabaseAdmin() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) throw new Error('Supabase admin envs not set');
    return createAdmin(url, serviceKey, { auth: { persistSession: false } });
}

export async function DELETE(req: Request) {
    try {
        const supabase = await createServClient();
        const authHeader = req.headers.get('authorization');
        let userId: string | null = null;

        if (authHeader?.startsWith('Bearer ')) {
            const token = authHeader.slice(7);
            const { data, error } = await supabase.auth.getUser(token);
            if (error || !data?.user) {
                return NextResponse.json(
                    {
                        error: 'Unauthorized',
                        details: error?.message ?? 'No authorized user found',
                    },
                    { status: 401 },
                );
            }
            userId = data.user.id;
        } else {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                return NextResponse.json(
                    {
                        error: 'Unauthorized',
                        details: error?.message ?? 'No authorized user found',
                    },
                    { status: 401 },
                );
            }
            userId = data.user.id;
        }

        const admin = getSupabaseAdmin();

        await Promise.allSettled([
            admin.from('settings').delete().eq('user_id', userId),
            admin.from('subscriptions').delete().eq('user_id', userId),
        ]);

        try {
            await supabase.auth.signOut();
        } catch (err) {
            console.warn('signOut warning:', err);
        }

        const { error } = await admin.auth.admin.deleteUser(userId);
        if (error) {
            console.error('Account deletion error:', error);
            return NextResponse.json(
                { error: 'Failed to delete account', details: error.message },
                { status: 400 },
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Account successfully deleted',
        });
    } catch (err: any) {
        console.error('Unexpected deletion error:', err);
        return NextResponse.json(
            {
                error: 'Unexpected error during account deletion',
                details: err.message,
            },
            { status: 500 },
        );
    }
}
