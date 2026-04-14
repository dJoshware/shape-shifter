"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import createClient from "@/lib/supabaseBrowserClient";
import { isValidPassword } from "@/lib/API";

function EyeIcon({ open }: { open: boolean }) {
    return open ? (
        <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
            />
        </svg>
    ) : (
        <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
        </svg>
    );
}

type Stage = "verifying" | "ready" | "expired" | "done";

export default function ResetPasswordPage() {
    const router = useRouter();
    const supabase = React.useMemo(() => createClient(), []);

    const [stage, setStage] = React.useState<Stage>("verifying");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formError, setFormError] = React.useState("");
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertOk, setAlertOk] = React.useState(true);

    // Wait for Supabase to exchange the recovery token from the URL hash.
    // PASSWORD_RECOVERY fires once the session is established from the link.
    React.useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(event => {
            if (event === "PASSWORD_RECOVERY") {
                setStage("ready");
            }
        });

        // If no recovery event within 10 s the link is expired or invalid
        const timer = setTimeout(() => {
            setStage(s => (s === "verifying" ? "expired" : s));
        }, 10_000);

        return () => {
            subscription.unsubscribe();
            clearTimeout(timer);
        };
    }, [supabase]);

    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setFormError(
                confirmPassword === password ? "" : "Passwords must match.",
            );
        } else {
            setFormError("");
        }
    }, [password, confirmPassword]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAlertMessage("");

        if (!isValidPassword(password)) {
            setFormError(
                "Password must be 8+ characters with uppercase, lowercase, a number, and a special character (!@#$%^&_.?/-).",
            );
            return;
        }
        if (password !== confirmPassword) {
            setFormError("Passwords do not match.");
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.updateUser({ password });
        setLoading(false);

        if (error) {
            setAlertOk(false);
            setAlertMessage(
                error.message ||
                    "Could not update your password. Please try again.",
            );
        } else {
            localStorage.setItem("passwordResetDone", "true");
            setStage("done");
            await new Promise(r => setTimeout(r, 2000));
            localStorage.removeItem("passwordResetDone");
            router.push("/signin");
        }
    };

    return (
        <div className='flex-1 grid place-items-center px-4 py-8'>
            <div className='w-full max-w-sm'>
                <div className='bg-sand-4 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 text-center'>
                    <span className='text-2xl font-bold text-sand-1'>
                        The Shape Shifter
                    </span>

                    {/* Verifying */}
                    {stage === "verifying" && (
                        <div className='flex flex-col items-center gap-3 py-4'>
                            <div className='w-8 h-8 rounded-full border-4 border-sand-1/20 border-t-sand-1 animate-spin' />
                            <p className='text-sm text-sand-1/60'>
                                Verifying your link…
                            </p>
                        </div>
                    )}

                    {/* Expired / invalid */}
                    {stage === "expired" && (
                        <div className='flex flex-col gap-4'>
                            <div className='rounded-lg px-4 py-3 bg-red-900/40 border border-red-600/30 text-red-300 text-sm'>
                                This link has expired or is invalid. Please
                                request a new one from the sign-in page.
                            </div>
                            <button
                                onClick={() => router.push("/signin")}
                                className='self-center px-8 py-2 bg-sand-1 text-sand-4 font-bold rounded-full hover:opacity-90 transition-all'>
                                Back to sign in
                            </button>
                        </div>
                    )}

                    {/* Ready — show form */}
                    {stage === "ready" && (
                        <>
                            <p className='text-sm text-sand-1/60 -mt-2'>
                                Choose a new password for your account.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className='flex flex-col gap-4 text-left'>
                                {/* New password */}
                                <div className='flex flex-col gap-1'>
                                    <label className='text-xs font-semibold text-sand-1/80'>
                                        New password
                                    </label>
                                    <div className='flex items-center border-b-2 border-sand-1/40 focus-within:border-sand-1 transition-colors'>
                                        <input
                                            autoComplete='new-password'
                                            className='flex-1 bg-transparent text-sand-1 placeholder-sand-1/40 text-sm py-2 px-1 outline-none'
                                            onChange={e => {
                                                setPassword(e.target.value);
                                                setAlertMessage("");
                                            }}
                                            placeholder='New password'
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={password}
                                        />
                                        <button
                                            type='button'
                                            onClick={() =>
                                                setShowPassword(s => !s)
                                            }
                                            className='pl-1 text-sand-1/50 hover:text-sand-1 transition-colors'>
                                            <EyeIcon open={showPassword} />
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm password */}
                                <div className='flex flex-col gap-1'>
                                    <label className='text-xs font-semibold text-sand-1/80'>
                                        Confirm password
                                    </label>
                                    <div className='flex items-center border-b-2 border-sand-1/40 focus-within:border-sand-1 transition-colors duration-150'>
                                        <input
                                            autoComplete='new-password'
                                            className='flex-1 bg-transparent text-sand-1 placeholder-sand-1/40 text-sm py-2 px-1 outline-none'
                                            onChange={e => {
                                                setConfirmPassword(
                                                    e.target.value,
                                                );
                                                setAlertMessage("");
                                            }}
                                            placeholder='Confirm password'
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={confirmPassword}
                                        />
                                    </div>
                                    {formError && (
                                        <p className='text-xs mt-0.5 text-red-400'>
                                            {formError}
                                        </p>
                                    )}
                                </div>

                                {alertMessage && (
                                    <div
                                        className={`rounded-lg px-3 py-2 text-sm font-semibold ${alertOk ? "bg-green/20 text-green border border-green/40" : "bg-red-900/40 text-red-300 border border-red-600/30"}`}>
                                        {alertMessage}
                                    </div>
                                )}

                                <button
                                    disabled={loading}
                                    type='submit'
                                    className='self-center px-8 py-2 bg-sand-1 text-sand-4 font-bold rounded-full hover:opacity-90 disabled:opacity-50 transition-all'>
                                    {loading ? (
                                        <span className='flex items-center gap-2'>
                                            <span className='w-4 h-4 rounded-full border-2 border-sand-4 border-t-transparent animate-spin' />
                                            Saving…
                                        </span>
                                    ) : (
                                        "Set new password"
                                    )}
                                </button>
                            </form>
                        </>
                    )}

                    {/* Done */}
                    {stage === "done" && (
                        <div className='flex flex-col items-center gap-3 py-4'>
                            <div className='w-10 h-10 rounded-full bg-olive/20 border border-olive/40 flex items-center justify-center'>
                                <svg
                                    className='w-5 h-5 text-olive'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth={2.5}>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M5 13l4 4L19 7'
                                    />
                                </svg>
                            </div>
                            <p className='text-sm text-sand-1/80'>
                                Password updated! Redirecting to sign in…
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
