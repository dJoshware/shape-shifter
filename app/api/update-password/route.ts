import { NextResponse } from 'next/server';
import { createServClient } from '@/lib/supabaseServerClient';
import { createClient as createAdmin } from '@supabase/supabase-js';

function getSupabaseAdmin() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) throw new Error('Supabase admin envs not set');
    return createAdmin(url, serviceKey, { auth: { persistSession: false } });
}

export async function PUT(req: Request) {
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

        const { password } = await req.json();
        if (!password) {
            return NextResponse.json(
                { error: 'Invalid Request', details: 'Password is required' },
                { status: 400 },
            );
        }

        const admin = getSupabaseAdmin();
        const { data: updateData, error: updateError } =
            await admin.auth.admin.updateUserById(userId, { password });

        if (updateError) {
            console.error('Password update error:', updateError);
            return NextResponse.json(
                {
                    error: 'Failed to update password',
                    details: updateError.message,
                },
                { status: 400 },
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Password successfully updated',
            data: updateData,
        });
    } catch (err: any) {
        console.error('Unexpected password update error:', err);
        return NextResponse.json(
            {
                error: 'Unexpected error during password update',
                details: err.message,
            },
            { status: 500 },
        );
    }
}
