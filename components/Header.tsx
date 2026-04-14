"use client";

import * as React from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAuth } from "@/lib/contexts/AuthContext";
import FormFields from "@/components/FormFields";
import SubmitFeedback from "@/components/SubmitFeedback";
import {
    deleteAccount,
    updateEmail,
    updatePassword,
    emailRegex,
    isValidPassword,
    toInitials,
} from "@/lib/API";

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Draw Mode"] as const;
type Level = (typeof LEVELS)[number];

type Props = {
    difficulty: string;
    onDifficultyChange: (level: string) => void;
};

function LockIcon() {
    return (
        <svg
            className='w-3.5 h-3.5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
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
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
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
                d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
            />
        </svg>
    );
}

export default function Header({ difficulty, onDifficultyChange }: Props) {
    const supabase = React.useMemo(
        () =>
            createBrowserClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            ),
        [],
    );
    const { user, signOut, isLoading: authIsLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // Subscription
    const [hasPro, setHasPro] = React.useState(false);
    const lockedLevels: Level[] = hasPro ? [] : ["Advanced", "Draw Mode"];
    const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : "U";

    // UI state
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [mobileLevelOpen, setMobileLevelOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const panelRef = React.useRef<HTMLDivElement>(null);
    const touchStartX = React.useRef(0);
    const touchStartY = React.useRef(0);
    const isSwiping = React.useRef(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        isSwiping.current = false;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const deltaX = e.touches[0].clientX - touchStartX.current;
        const deltaY = e.touches[0].clientY - touchStartY.current;
        if (
            !isSwiping.current &&
            (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)
        ) {
            isSwiping.current = Math.abs(deltaX) > Math.abs(deltaY);
        }
        if (isSwiping.current && deltaX > 0 && panelRef.current) {
            panelRef.current.style.transition = "none";
            panelRef.current.style.transform = `translateX(${deltaX}px)`;
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (panelRef.current) {
            panelRef.current.style.transition = "";
            panelRef.current.style.transform = "";
        }
        if (isSwiping.current && deltaX > 80) {
            setDrawerOpen(false);
        }
    };
    const [paywallOpen, setPaywallOpen] = React.useState(
        () => typeof window !== "undefined" && new URLSearchParams(window.location.search).get("paywall") === "1",
    );

    // Clear ?paywall=1 from the URL once the modal is open
    React.useEffect(() => {
        if (searchParams.get("paywall") === "1") {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("paywall");
            const newUrl = pathname + (params.size ? `?${params}` : "");
            router.replace(newUrl, { scroll: false });
        }
    }, [searchParams, pathname, router]);
    const [plan, setPlan] = React.useState<"monthly" | "yearly">("monthly");
    const [signoutLoading, setSignoutLoading] = React.useState(false);
    const [paywallLoading, setPaywallLoading] = React.useState(false);
    const [paywallAlert, setPaywallAlert] = React.useState("");
    const [prices, setPrices] = React.useState<{
        monthly: string | null;
        yearly: string | null;
    }>({ monthly: null, yearly: null });

    React.useEffect(() => {
        fetch("/api/prices")
            .then(r => r.json())
            .then(d => {
                if (d.monthly || d.yearly) setPrices(d);
            })
            .catch(() => {});
    }, []);

    // Email update
    const [email, setEmail] = React.useState("");
    const [updateEmailLoading, setUpdateEmailLoading] = React.useState(false);
    const [updateEmailAlert, setUpdateEmailAlert] = React.useState<{
        msg: string;
        ok: boolean;
    } | null>(null);

    // Password update
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [updatePasswordLoading, setUpdatePasswordLoading] =
        React.useState(false);
    const [updatePasswordAlert, setUpdatePasswordAlert] = React.useState<{
        msg: string;
        ok: boolean;
    } | null>(null);

    // Delete account
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [deleteLoading, setDeleteLoading] = React.useState(false);
    const [deleteAlert, setDeleteAlert] = React.useState<{
        msg: string;
        ok: boolean;
    } | null>(null);

    function isPro(sub: unknown): boolean {
        if (!sub || typeof sub !== "object") return false;
        const s = sub as { status?: string; current_period_end?: string };
        const active = new Set(["active", "trialing", "past_due"]);
        return (
            active.has(s.status ?? "") &&
            new Date(s.current_period_end ?? "") > new Date()
        );
    }

    // Subscription watcher
    React.useEffect(() => {
        let channel: ReturnType<typeof supabase.channel> | null = null;
        let authSub: { unsubscribe: () => void } | null = null;

        async function wire(uid: string) {
            if (channel) {
                supabase.removeChannel(channel);
                channel = null;
            }

            const { data } = await supabase
                .from("subscriptions")
                .select("status,current_period_end")
                .eq("user_id", uid)
                .maybeSingle();
            setHasPro(isPro(data));

            channel = supabase
                .channel(`subs-${uid}`)
                .on(
                    "postgres_changes",
                    {
                        event: "*",
                        schema: "public",
                        table: "subscriptions",
                        filter: `user_id=eq.${uid}`,
                    },
                    (payload: {
                        new: Record<string, unknown>;
                        old: Record<string, unknown>;
                    }) => {
                        const row = payload.new || payload.old || null;
                        setHasPro(isPro(row));
                    },
                )
                .subscribe();
        }

        (async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            const uid = session?.user?.id;
            if (uid) await wire(uid);

            authSub = supabase.auth.onAuthStateChange((_evt, newSession) => {
                const newUid = newSession?.user?.id;
                if (!newUid) {
                    setHasPro(false);
                    if (channel) supabase.removeChannel(channel);
                    return;
                }
                if (channel) supabase.removeChannel(channel);
                wire(newUid);
            }).data.subscription;
        })();

        return () => {
            if (channel) supabase.removeChannel(channel);
            authSub?.unsubscribe();
        };
    }, [supabase]);

    // Pre-fill email
    React.useEffect(() => {
        if (user) setEmail(user.email ?? "");
    }, [user]);

    // Password mismatch hint
    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setUpdatePasswordAlert(
                confirmPassword === password
                    ? null
                    : { msg: "Passwords must match.", ok: false },
            );
        } else {
            setUpdatePasswordAlert(null);
        }
    }, [password, confirmPassword]);

    const handleDifficultyClick = (level: Level) => {
        if (lockedLevels.includes(level)) {
            setPaywallOpen(true);
            return;
        }
        setMobileLevelOpen(false);
        onDifficultyChange(level);
    };

    const handleSubscribe = async () => {
        setPaywallLoading(true);
        setPaywallAlert("");
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: user?.email, plan }),
            });
            if (!res.ok) {
                setPaywallAlert("Failed to create checkout session.");
                return;
            }
            const { url } = await res.json();
            router.push(url);
        } catch {
            setPaywallAlert("Unable to start checkout. Please try again.");
        } finally {
            setPaywallLoading(false);
        }
    };

    const handleUpdateEmail = async () => {
        setUpdateEmailLoading(true);
        try {
            if (!email || !emailRegex.test(email))
                throw new Error("Invalid email format");
            if (email === user?.email)
                throw new Error(
                    "New email must be different from current email",
                );
            await updateEmail(email);
            setUpdateEmailAlert({ msg: "Email updated!", ok: true });
            await new Promise(r => setTimeout(r, 3000));
            setUpdateEmailAlert(null);
        } catch (err) {
            const msg = err instanceof Error ? err.message : "";
            setUpdateEmailAlert({
                msg: msg.includes("Invalid email")
                    ? "Enter a valid email"
                    : msg.includes("different")
                      ? "Must be a new email address"
                      : "Could not update email.",
                ok: false,
            });
        } finally {
            setUpdateEmailLoading(false);
        }
    };

    const handleUpdatePassword = async () => {
        setUpdatePasswordLoading(true);
        try {
            if (!password.trim()) throw new Error("Enter a password");
            if (!confirmPassword.trim())
                throw new Error("Confirm your password");
            if (password !== confirmPassword)
                throw new Error("Passwords do not match");
            if (!isValidPassword(confirmPassword))
                throw new Error(
                    "Password must be 8+ chars with uppercase, lowercase, number, and symbol.",
                );
            await updatePassword(confirmPassword);
            setPassword("");
            setConfirmPassword("");
            setUpdatePasswordAlert({ msg: "Password updated!", ok: true });
            await new Promise(r => setTimeout(r, 3000));
            setUpdatePasswordAlert(null);
        } catch (err) {
            setUpdatePasswordAlert({
                msg:
                    err instanceof Error
                        ? err.message
                        : "Could not update password.",
                ok: false,
            });
        } finally {
            setUpdatePasswordLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        setDeleteLoading(true);
        try {
            await deleteAccount();
            await signOut();
            setDeleteAlert({ msg: "Account deleted.", ok: true });
            await new Promise(r => setTimeout(r, 2000));
            setDeleteOpen(false);
            setDrawerOpen(false);
        } catch {
            setDeleteAlert({
                msg: "Could not delete account. Try again.",
                ok: false,
            });
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleDrawerSignout = async () => {
        setSignoutLoading(true);
        setDrawerOpen(false);
        await signOut();
        setSignoutLoading(false);
    };

    // ── Shared class helpers ──────────────────────────────────
    const levelBtnBase =
        "relative px-3 sm:px-4 py-1.5 text-sm font-medium rounded border transition-all duration-150 select-none";
    const levelBtnActive = "bg-sand-4 text-sand-1 border-ink font-semibold";
    const levelBtnInactive =
        "bg-sand-1 text-ink border-ink/40 hover:border-ink";

    const alertClass = (ok: boolean) =>
        `rounded-lg px-3 py-2 text-xs font-semibold ${ok ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-700 border border-red-300"}`;

    // ── Auth loading splash ───────────────────────────────────
    if (authIsLoading && !user) {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-sand-1 z-50'>
                <div className='w-8 h-8 border-4 border-ink border-t-transparent rounded-full animate-spin' />
            </div>
        );
    }

    return (
        <>
            {/* ── AppBar ────────────────────────────────────────── */}
            <header className='relative flex items-center px-4 sm:px-8 sm:pt-5 pb-2 sm:pb-3'>
                {/* Left slot (mobile: level picker; desktop: spacer) */}
                <div className='flex-1'>
                    {/* Mobile: compact dropdown button */}
                    <div className='sm:hidden flex flex-col items-start gap-0.5'>
                        <span className='text-[10px] font-bold text-ink/60 ml-0.5'>
                            Level
                        </span>
                        <button
                            onClick={() => setMobileLevelOpen(true)}
                            className='w-10 h-10 bg-sand-4 border border-ink rounded text-sand-1 text-sm font-bold'>
                            {toInitials(difficulty)}
                        </button>

                        {mobileLevelOpen && (
                            <div
                                className='fixed inset-0 z-40 flex items-start justify-start bg-black/30 pt-14 pl-3'
                                onClick={() => setMobileLevelOpen(false)}>
                                <div
                                    className='bg-sand-2 rounded-xl shadow-xl overflow-hidden'
                                    onClick={e => e.stopPropagation()}>
                                    {LEVELS.map(level => {
                                        const locked =
                                            lockedLevels.includes(level);
                                        return (
                                            <button
                                                key={level}
                                                onClick={() =>
                                                    handleDifficultyClick(level)
                                                }
                                                className={`relative flex items-center gap-2 w-full px-5 py-3 text-sm font-medium border-b border-ink/10 last:border-0 transition-colors ${
                                                    difficulty === level
                                                        ? "bg-sand-4 text-sand-1 font-semibold"
                                                        : "text-ink hover:bg-sand-3"
                                                } ${locked ? "opacity-50" : ""}`}>
                                                {level}
                                                {locked && <LockIcon />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop: hidden in left slot */}
                </div>

                {/* Center: Desktop level buttons */}
                <div className='hidden sm:flex gap-0'>
                    {LEVELS.map((level, i) => {
                        const locked = lockedLevels.includes(level);
                        const isFirst = i === 0;
                        const isLast = i === LEVELS.length - 1;
                        return (
                            <button
                                key={level}
                                onClick={() => handleDifficultyClick(level)}
                                title={
                                    locked ? "Subscribe to unlock" : undefined
                                }
                                className={`
                  ${levelBtnBase}
                  ${difficulty === level ? levelBtnActive : levelBtnInactive}
                  ${locked ? "opacity-50" : ""}
                  ${isFirst ? "rounded-r-none" : isLast ? "rounded-l-none" : "rounded-none"}
                  -ml-px first:ml-0
                `}>
                                <span className='flex items-center gap-1.5'>
                                    {level}
                                    {locked && <LockIcon />}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right: User menu */}
                <div className='flex-1 flex items-center justify-end gap-2'>
                    {authIsLoading ? (
                        <div className='w-6 h-6 border-2 border-ink border-t-transparent rounded-full animate-spin' />
                    ) : user ? (
                        <div className='relative'>
                            <button
                                onClick={() => setMenuOpen(o => !o)}
                                title='Open settings'
                                className='w-10 h-10 rounded-full bg-ink text-sand-1 text-sm font-bold flex items-center justify-center hover:opacity-90 transition-opacity'>
                                {userInitial}
                            </button>
                            {menuOpen && (
                                <div
                                    className='absolute right-0 top-12 z-30 bg-sand-2 border border-ink/20 rounded-xl shadow-xl overflow-hidden min-w-[150px]'
                                    onMouseLeave={() => setMenuOpen(false)}>
                                    <button
                                        className='flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-ink hover:bg-sand-3 transition-colors'
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setDrawerOpen(true);
                                        }}>
                                        <svg
                                            className='w-4 h-4'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                        </svg>
                                        Settings
                                    </button>
                                    <button
                                        className='flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-ink hover:bg-sand-3 transition-colors border-t border-ink/10'
                                        onClick={() => {
                                            setMenuOpen(false);
                                            signOut();
                                        }}>
                                        <svg
                                            className='w-4 h-4'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                                            />
                                        </svg>
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => router.push("/signin")}
                            title='Sign in'
                            className='w-10 h-10 rounded-full border-2 border-ink/40 text-ink/60 flex items-center justify-center hover:border-ink hover:text-ink transition-colors'>
                            <svg
                                className='w-5 h-5'
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
                        </button>
                    )}
                </div>
            </header>

            {/* ── Settings Drawer ───────────────────────────────── */}
            {user && (
                <>
                    {/* Backdrop */}
                    <div
                        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        onClick={() => setDrawerOpen(false)}
                    />
                    {/* Panel */}
                    <div
                        ref={panelRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-sand-4 flex flex-col overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className='flex items-center justify-between px-5 py-3 border-b border-ink/20'>
                            <h2 className='text-lg font-bold text-sand-1'>
                                Settings
                            </h2>
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className='text-sand-1/70 hover:text-sand-1 transition-colors'>
                                <svg
                                    className='w-5 h-5'
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
                        </div>

                        <div className='flex-1 flex flex-col gap-6 px-5'>
                            {/* Feedback */}
                            <SubmitFeedback className='text-sand-1' />

                            {/* Change email */}
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xs font-bold text-sand-1/70 uppercase tracking-wider'>
                                    Email
                                </h3>
                                <div className='flex items-end gap-2'>
                                    <div className='flex-1'>
                                        <FormFields
                                            autoComplete='email'
                                            label='Change email'
                                            onBlur={() => {
                                                const trimmed = email.trim();
                                                if (
                                                    !trimmed ||
                                                    !emailRegex.test(trimmed)
                                                )
                                                    setEmail(user?.email ?? "");
                                            }}
                                            onChange={e => {
                                                setEmail(e.target.value);
                                                setUpdateEmailAlert(null);
                                            }}
                                            type='email'
                                            value={email}
                                        />
                                    </div>
                                    <button
                                        disabled={
                                            updateEmailLoading ||
                                            email === user?.email
                                        }
                                        onClick={handleUpdateEmail}
                                        className={`px-3 py-1.5 rounded-full bg-sand-1 text-sand-4 text-xs font-semibold transition-all shrink-0 ${
                                            email === user?.email
                                                ? "opacity-0 pointer-events-none"
                                                : "opacity-100 hover:opacity-90"
                                        } disabled:opacity-50`}>
                                        {updateEmailLoading ? "…" : "Save"}
                                    </button>
                                </div>
                                {updateEmailAlert && (
                                    <p
                                        className={alertClass(
                                            updateEmailAlert.ok,
                                        )}>
                                        {updateEmailAlert.msg}
                                    </p>
                                )}
                            </div>

                            {/* Change password */}
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xs font-bold text-sand-1/70 uppercase tracking-wider'>
                                    Password
                                </h3>
                                <FormFields
                                    autoComplete='new-password'
                                    endAdornment={
                                        <button
                                            type='button'
                                            onClick={() =>
                                                setShowPassword(s => !s)
                                            }
                                            className='text-sand-1/60 hover:text-sand-1 transition-colors'>
                                            <EyeIcon open={showPassword} />
                                        </button>
                                    }
                                    label='New password'
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                />
                                <div
                                    className={`transition-all overflow-hidden ${password ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className='flex items-end gap-2 pt-1'>
                                        <div className='flex-1'>
                                            <FormFields
                                                endAdornment={
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setShowPassword(
                                                                s => !s,
                                                            )
                                                        }
                                                        className='text-sand-1/60 hover:text-sand-1 transition-colors'>
                                                        <EyeIcon
                                                            open={showPassword}
                                                        />
                                                    </button>
                                                }
                                                label='Confirm password'
                                                onChange={e =>
                                                    setConfirmPassword(
                                                        e.target.value,
                                                    )
                                                }
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={confirmPassword}
                                            />
                                        </div>
                                        <button
                                            disabled={updatePasswordLoading}
                                            onClick={handleUpdatePassword}
                                            className='px-3 py-1.5 rounded-full bg-sand-1 text-sand-4 text-xs font-semibold hover:opacity-90 disabled:opacity-50 transition-all shrink-0'>
                                            {updatePasswordLoading
                                                ? "…"
                                                : "Save"}
                                        </button>
                                    </div>
                                </div>
                                {updatePasswordAlert && (
                                    <p
                                        className={alertClass(
                                            updatePasswordAlert.ok,
                                        )}>
                                        {updatePasswordAlert.msg}
                                    </p>
                                )}
                            </div>

                            {/* Manage subscription */}
                            {hasPro && (
                                <a
                                    href='https://billing.stripe.com/p/login/test_00waEW7qCfxn9JW60Y3ks00'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex items-center gap-2 px-4 py-2.5 rounded-full bg-sand-1 text-sand-4 text-sm font-semibold hover:opacity-90 transition-opacity w-fit'>
                                    <svg
                                        className='w-4 h-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                        />
                                    </svg>
                                    Manage Subscription
                                </a>
                            )}
                        </div>

                        {/* Danger zone */}
                        <div className='px-5 py-4 border-t border-ink/20 flex items-center justify-between'>
                            <button
                                disabled={signoutLoading}
                                onClick={handleDrawerSignout}
                                className='flex items-center gap-2 px-4 py-2 rounded-full bg-sand-1 text-sand-4 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-all'>
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                                    />
                                </svg>
                                {signoutLoading ? "Signing out…" : "Sign out"}
                            </button>
                            <button
                                onClick={() => setDeleteOpen(true)}
                                className='text-xs text-red-600/70 hover:text-red-700 font-semibold transition-colors underline underline-offset-2'>
                                Delete account
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* ── Paywall Modal ─────────────────────────────────── */}
            {paywallOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4'>
                    <div className='w-full max-w-sm bg-sand-4 rounded-3xl shadow-2xl overflow-hidden'>
                        {/* Hero */}
                        <div className='px-6 pt-7 pb-5 flex flex-col items-center gap-2 border-b border-sand-1/10'>
                            {/* Badge */}
                            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive/20 border border-olive/40 text-olive text-xs font-bold tracking-wide uppercase'>
                                <svg
                                    className='w-3 h-3'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'>
                                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                                </svg>
                                Pro
                            </span>

                            <h2 className='text-2xl font-bold text-sand-1 text-center leading-tight'>
                                Unlock your full
                                <br />
                                fretboard
                            </h2>
                            <p className='text-sm text-sand-1/60 text-center'>
                                Everything a serious guitarist needs
                            </p>
                        </div>

                        {/* Features */}
                        <ul className='px-6 py-4 flex flex-col gap-2.5'>
                            {[
                                "Advanced chord voicings",
                                "Draw Mode — build any shape",
                                "All string sets & positions",
                                "New shapes added regularly",
                            ].map(f => (
                                <li
                                    key={f}
                                    className='flex items-center gap-3'>
                                    <span className='shrink-0 w-5 h-5 rounded-full bg-olive/20 border border-olive/40 flex items-center justify-center'>
                                        <svg
                                            className='w-3 h-3 text-olive'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth={3}>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                    </span>
                                    <span className='text-sm text-sand-1/80 font-medium'>
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Plan toggle */}
                        <div className='px-6 pb-4 flex flex-col gap-3'>
                            {/* Badge sits above the toggle, not clipped by overflow-hidden */}
                            <div className='flex'>
                                <div className='flex-1' />
                                <div className='flex-1 flex justify-center'>
                                    <span className='px-2 py-0.5 rounded-full bg-olive text-sand-1 text-[9px] font-bold leading-tight whitespace-nowrap'>
                                        SAVE 20%
                                    </span>
                                </div>
                            </div>
                            <div className='flex rounded-xl overflow-hidden border border-sand-1/20 bg-sand-1/5'>
                                <button
                                    onClick={() => setPlan("monthly")}
                                    className={`flex-1 py-3 flex flex-col items-center gap-0.5 text-sm font-semibold transition-colors rounded-l-xl ${plan === "monthly" ? "bg-sand-1 text-sand-4" : "text-sand-1/50 hover:text-sand-1/80"}`}>
                                    <span>Monthly</span>
                                    {prices.monthly && (
                                        <span
                                            className={`text-xs font-medium ${plan === "monthly" ? "text-sand-4/60" : "text-sand-1/30"}`}>
                                            {prices.monthly}/mo
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={() => setPlan("yearly")}
                                    className={`flex-1 py-3 flex flex-col items-center gap-0.5 text-sm font-semibold transition-colors rounded-r-xl ${plan === "yearly" ? "bg-sand-1 text-sand-4" : "text-sand-1/50 hover:text-sand-1/80"}`}>
                                    <span>Yearly</span>
                                    {prices.yearly && (
                                        <span
                                            className={`text-xs font-medium ${plan === "yearly" ? "text-sand-4/60" : "text-sand-1/30"}`}>
                                            {prices.yearly}/yr
                                        </span>
                                    )}
                                </button>
                            </div>

                            {paywallAlert && (
                                <p className='rounded-lg px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 border border-red-600/30'>
                                    {paywallAlert}
                                </p>
                            )}

                            {/* CTA */}
                            <button
                                disabled={paywallLoading}
                                onClick={
                                    user
                                        ? handleSubscribe
                                        : () => router.push("/signin?redirect=paywall")
                                }
                                className='w-full py-3.5 rounded-full bg-sand-1 text-sand-4 text-sm font-bold tracking-wide hover:opacity-90 disabled:opacity-40 transition-all active:scale-95'>
                                {!user
                                    ? "Sign in to continue"
                                    : paywallLoading
                                      ? "Loading…"
                                      : plan === "yearly"
                                        ? "Start yearly plan"
                                        : "Start monthly plan"}
                            </button>

                            <button
                                onClick={() => setPaywallOpen(false)}
                                className='w-full text-center text-xs text-sand-1/40 hover:text-sand-1/70 transition-colors py-1'>
                                Maybe later
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Delete Account Confirmation ───────────────────── */}
            {deleteOpen && (
                <div className='fixed inset-0 z-60 flex items-center justify-center bg-black/60 px-4'>
                    <div className='w-full max-w-sm bg-sand-4 rounded-2xl shadow-2xl overflow-hidden'>
                        <div className='px-6 py-5 border-b border-red-600/30'>
                            <h2 className='text-lg font-bold text-sand-1 text-center'>
                                Delete Account
                            </h2>
                            <p className='text-sm text-sand-1/70 text-center mt-1'>
                                This cannot be undone.
                            </p>
                        </div>
                        <div className='px-6 py-4'>
                            {deleteAlert && (
                                <p className={alertClass(deleteAlert.ok)}>
                                    {deleteAlert.msg}
                                </p>
                            )}
                        </div>
                        <div className='flex gap-3 px-6 pb-5'>
                            <button
                                onClick={() => {
                                    setDeleteOpen(false);
                                    setDeleteAlert(null);
                                }}
                                className='flex-1 py-2.5 rounded-full bg-sand-2 text-ink text-sm font-semibold hover:bg-sand-3 transition-colors'>
                                Cancel
                            </button>
                            <button
                                disabled={deleteLoading}
                                onClick={handleDeleteAccount}
                                className='flex-1 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 disabled:opacity-50 transition-all'>
                                {deleteLoading ? "Deleting…" : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
