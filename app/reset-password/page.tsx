"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/contexts/AuthContext";
import FormFields from "@/components/FormFields";
import createClient from "@/lib/supabaseBrowserClient";
import { isValidPassword } from "@/lib/API";

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

export default function PasswordResetPage() {
    const router = useRouter();
    const supabase = createClient();
    const { user, isLoading: authIsLoading, session } = useAuth();

    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [formError, setFormError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertOk, setAlertOk] = React.useState(true);
    const [isResetComplete, setResetComplete] = React.useState(false);

    const handleShowPassword = () => setShowPassword(s => !s);

    const validateForm = () => {
        setFormError("");
        setAlertMessage("");
        if (!password.trim()) {
            setFormError("Please enter a password.");
            return false;
        }
        if (!confirmPassword.trim()) {
            setFormError("Please confirm your password.");
            return false;
        }
        if (password !== confirmPassword) {
            setFormError("Passwords do not match.");
            return false;
        }
        if (!isValidPassword(confirmPassword)) {
            setFormError(
                "Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol (!@#$%^&-_.?/).",
            );
            return false;
        }
        return true;
    };

    const handlePasswordReset = async () => {
        if (!validateForm()) return;
        setLoading(true);

        let attempts = 0;
        while (!session && attempts < 10) {
            await new Promise(r => setTimeout(r, 300));
            attempts++;
        }
        if (!session) {
            setLoading(false);
            setAlertOk(false);
            setAlertMessage(
                "Session not found. Please refresh the page and try again.",
            );
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: confirmPassword,
        });

        if (error) {
            setLoading(false);
            setAlertOk(false);
            setAlertMessage(
                error.message ||
                    "Could not update your password. Please try again.",
            );
        } else {
            localStorage.setItem("passwordResetDone", "true");
            setLoading(false);
            setAlertOk(true);
            setAlertMessage(
                "Password successfully updated! Returning to practice…",
            );
            setResetComplete(true);
            setTimeout(() => {
                if (window.opener) window.close();
            }, 3000);
        }
    };

    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setFormError(
                confirmPassword === password ? "" : "Passwords must match.",
            );
        } else {
            setFormError("");
        }
    }, [password, confirmPassword]);

    if (authIsLoading && !user) {
        return (
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-8 h-8 rounded-full border-4 border-ink border-t-transparent animate-spin' />
            </div>
        );
    }

    if (isResetComplete) {
        return (
            <div className='flex-1 flex flex-col items-center justify-center gap-4'>
                {alertMessage && (
                    <div className='rounded-lg px-4 py-2 text-sm font-semibold bg-green/20 text-green border border-green/40'>
                        {alertMessage}
                    </div>
                )}
                <button
                    onClick={() => {
                        localStorage.removeItem("passwordResetDone");
                        window.close();
                    }}
                    className='px-6 py-2 bg-ink text-sand-1 font-bold rounded-full hover:opacity-90 transition-opacity'>
                    Close this window
                </button>
            </div>
        );
    }

    const passwordError = /password/i.test(formError);

    return (
        <div className='flex-1 grid place-items-center px-4 py-8'>
            <div className='w-full max-w-sm'>
                <div className='bg-sand-4 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 text-center'>
                    <h3 className='text-2xl font-bold text-sand-1'>
                        Reset your password
                    </h3>

                    <div className='flex flex-col gap-4'>
                        <FormFields
                            label='New password'
                            onChange={e => {
                                setPassword(e.target.value);
                                setAlertMessage("");
                            }}
                            startAdornment={<KeyIcon />}
                            endAdornment={
                                <button
                                    type='button'
                                    onClick={handleShowPassword}
                                    className='text-ink/50 hover:text-ink transition-colors'>
                                    <EyeIcon open={showPassword} />
                                </button>
                            }
                            type={showPassword ? "text" : "password"}
                            value={password}
                        />

                        <FormFields
                            error={passwordError}
                            helperText={passwordError ? formError : ""}
                            label='Confirm New Password'
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                                setAlertMessage("");
                            }}
                            startAdornment={<KeyIcon />}
                            endAdornment={
                                <button
                                    type='button'
                                    onClick={handleShowPassword}
                                    className='text-ink/50 hover:text-ink transition-colors'>
                                    <EyeIcon open={showPassword} />
                                </button>
                            }
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                        />

                        {alertMessage && (
                            <div
                                className={`rounded-lg px-3 py-2 text-sm font-semibold ${alertOk ? "bg-green/20 text-green border border-green/40" : "bg-red-100 text-red-700 border border-red-300"}`}>
                                {alertMessage}
                            </div>
                        )}

                        <div className='flex justify-center gap-4 mt-2'>
                            <button
                                onClick={() => router.push("/")}
                                className='px-6 py-2 bg-sand-2 text-ink font-bold rounded-full hover:bg-sand-3 transition-colors'>
                                Cancel
                            </button>
                            <button
                                disabled={loading}
                                onClick={handlePasswordReset}
                                className='px-6 py-2 bg-ink text-sand-1 font-bold rounded-full hover:opacity-90 disabled:opacity-50 transition-all'>
                                {loading ? (
                                    <span className='flex items-center gap-2'>
                                        <span className='w-4 h-4 rounded-full border-2 border-sand-1 border-t-transparent animate-spin' />
                                        Saving…
                                    </span>
                                ) : (
                                    "Save"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
