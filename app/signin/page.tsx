"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/contexts/AuthContext";
import FormFields from "@/components/FormFields";
import RecoverPassword from "@/components/RecoverPassword";
import SubmitFeedback from "@/components/SubmitFeedback";
import { emailRegex } from "@/lib/API";

function PersonIcon() {
    return (
        <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
        </svg>
    );
}

function KeyIcon() {
    return (
        <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
            />
        </svg>
    );
}

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

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, signIn, isLoading: authIsLoading } = useAuth();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [formError, setFormError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertOk, setAlertOk] = React.useState(true);

    const validateForm = () => {
        setFormError("");
        setAlertMessage("");
        if (!email.trim() || !emailRegex.test(email)) {
            setFormError("Please enter a valid email address.");
            return false;
        }
        if (!password.trim()) {
            setFormError("Please enter your password.");
            return false;
        }
        return true;
    };

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!validateForm()) {
            setLoading(false);
            return;
        }

        const { error } = await signIn(email, password);
        setLoading(false);
        if (error) {
            setAlertOk(false);
            setAlertMessage(
                error.message ||
                    "Failed to sign in. Please check your credentials.",
            );
        } else {
            setAlertOk(true);
            setAlertMessage("Sign in successful! Redirecting…");
        }
    };

    React.useEffect(() => {
        if (!user) return;
        const redirect = searchParams.get("redirect");
        router.push(redirect === "paywall" ? "/?paywall=1" : "/");
    }, [user, router, searchParams]);

    if (authIsLoading && !user) {
        return (
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-8 h-8 rounded-full border-4 border-ink border-t-transparent animate-spin' />
            </div>
        );
    }

    if (user) {
        return (
            <div className='flex-1 flex flex-col items-center justify-center gap-4'>
                <span className='text-2xl font-semibold text-ink'>
                    Loading Shape Shifter…
                </span>
                <div className='w-8 h-8 rounded-full border-4 border-ink border-t-transparent animate-spin' />
            </div>
        );
    }

    const emailError = /email/i.test(formError);
    const passwordError = /password/i.test(formError);

    return (
        <div className='flex-1 grid place-items-center px-4 py-8'>
            <div className='w-full max-w-sm flex flex-col gap-4'>
                <div className='bg-sand-4 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 text-center'>
                    <Link
                        href='/'
                        className='text-2xl font-bold text-sand-1 underline underline-offset-4 hover:opacity-80 transition-opacity'>
                        The Shape Shifter
                    </Link>

                    <form
                        onSubmit={handleSignin}
                        className='flex flex-col gap-4'>
                        <FormFields
                            autoComplete='email'
                            error={emailError}
                            helperText={emailError ? formError : ""}
                            label='Email'
                            onChange={e => {
                                setEmail(e.target.value);
                                setFormError("");
                                setAlertMessage("");
                            }}
                            required
                            startAdornment={<PersonIcon />}
                            endAdornment={
                                email ? (
                                    <button
                                        type='button'
                                        onClick={() => setEmail("")}
                                        className='text-ink/50 hover:text-ink transition-colors'>
                                        <svg
                                            className='w-4 h-4'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </button>
                                ) : null
                            }
                            type='email'
                            value={email}
                        />

                        <FormFields
                            autoComplete='current-password'
                            error={passwordError}
                            helperText={passwordError ? formError : ""}
                            label='Password'
                            onChange={e => {
                                setPassword(e.target.value);
                                setFormError("");
                                setAlertMessage("");
                            }}
                            required
                            startAdornment={<KeyIcon />}
                            endAdornment={
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(s => !s)}
                                    className='text-ink/50 hover:text-ink transition-colors'>
                                    <EyeIcon open={showPassword} />
                                </button>
                            }
                            type={showPassword ? "text" : "password"}
                            value={password}
                        />

                        {alertMessage && (
                            <div
                                className={`rounded-lg px-3 py-2 text-sm font-semibold ${alertOk ? "bg-green/20 text-green border border-green/40" : "bg-red-100 text-red-700 border border-red-300"}`}>
                                {alertMessage}
                            </div>
                        )}

                        <button
                            disabled={loading}
                            type='submit'
                            className='self-center px-8 py-2 bg-ink text-sand-1 font-bold rounded-full hover:opacity-90 disabled:opacity-50 transition-all'>
                            {loading ? (
                                <span className='flex items-center gap-2'>
                                    <span className='w-4 h-4 rounded-full border-2 border-sand-1 border-t-transparent animate-spin' />
                                    Signing in…
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>

                        <div className='flex justify-between items-center mt-1'>
                            <RecoverPassword />
                            <Link
                                href='/create-account'
                                className='text-sm font-semibold text-ink underline-offset-4 hover:underline transition-all'>
                                Don&apos;t have an account?
                            </Link>
                        </div>
                    </form>
                </div>

                <div className='flex justify-center'>
                    <SubmitFeedback />
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <React.Suspense>
            <LoginForm />
        </React.Suspense>
    );
}
