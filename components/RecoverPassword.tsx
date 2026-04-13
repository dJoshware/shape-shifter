"use client";

import * as React from "react";
import createClient from "@/lib/supabaseBrowserClient";
import { emailRegex } from "@/lib/API";

export default function RecoverPassword() {
    const supabase = createClient();
    const [open, setOpen] = React.useState(false);
    const [formEmail, setFormEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState<{
        msg: string;
        ok: boolean;
    } | null>(null);

    const handleSubmit = async () => {
        if (!formEmail.trim() || !emailRegex.test(formEmail)) {
            setAlert({ msg: "Please enter a valid email address.", ok: false });
            return;
        }
        setLoading(true);
        setAlert(null);

        const siteUrl =
            process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
        const { error } = await supabase.auth.resetPasswordForEmail(formEmail, {
            redirectTo: `${siteUrl}/reset-password`,
        });

        setLoading(false);
        if (error) {
            setAlert({
                msg:
                    error.message ||
                    "Could not send recovery email. Please try again.",
                ok: false,
            });
        } else {
            setAlert({
                msg: "Recovery email sent! Check your inbox.",
                ok: true,
            });
            await new Promise(r => setTimeout(r, 2500));
            setOpen(false);
            setFormEmail("");
            setAlert(null);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className='relative text-sm font-semibold text-ink underline-offset-4 hover:underline transition-all'>
                Forgot password?
            </button>

            {open && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
                    <div className='w-full max-w-sm bg-sand-4 rounded-2xl shadow-2xl overflow-hidden'>
                        {/* Header */}
                        <div className='border-b border-ink/30 px-6 py-4'>
                            <h2 className='text-xl font-bold text-sand-1 text-center'>
                                Let&apos;s get you back to practice!
                            </h2>
                        </div>

                        {/* Body */}
                        <div className='px-6 py-5 flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-xs font-semibold text-sand-1/80'>
                                    Recovery email address
                                </label>
                                <input
                                    autoComplete='email'
                                    className='w-full bg-sand-3/50 border border-ink/30 rounded-lg px-3 py-2 text-sm text-ink placeholder-ink/40 outline-none focus:border-ink transition-colors'
                                    onChange={e => {
                                        setFormEmail(e.target.value);
                                        setAlert(null);
                                    }}
                                    placeholder='you@example.com'
                                    type='email'
                                    value={formEmail}
                                />
                            </div>

                            {alert && (
                                <div
                                    className={`rounded-lg px-3 py-2 text-sm font-semibold ${alert.ok ? "bg-green/20 text-green border border-green/40" : "bg-red-100 text-red-700 border border-red-300"}`}>
                                    {alert.msg}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className='flex justify-end gap-3 px-6 pb-5'>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setFormEmail("");
                                    setAlert(null);
                                }}
                                className='px-5 py-2 rounded-full bg-sand-2 text-ink text-sm font-semibold hover:bg-sand-3 transition-colors'>
                                Cancel
                            </button>
                            <button
                                disabled={loading}
                                onClick={handleSubmit}
                                className='px-5 py-2 rounded-full bg-ink text-sand-1 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-all'>
                                {loading ? "Sending…" : "Send link"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
