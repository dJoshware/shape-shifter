"use client";

import * as React from "react";
import createClient from "@/lib/supabaseBrowserClient";
import { useRouter } from "next/navigation";
import type { User, Session, AuthError } from "@supabase/supabase-js";

type AuthContextValue = {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    signIn: (
        email: string,
        password: string,
    ) => Promise<{
        data: { user: User | null; session: Session | null };
        error: AuthError | null;
    }>;
    signUp: (
        email: string,
        password: string,
    ) => Promise<{
        data: { user: User | null; session: Session | null };
        error: AuthError | null;
    }>;
    signOut: () => Promise<void>;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(
    undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const supabase = React.useMemo(() => createClient(), []);
    const router = useRouter();
    const [user, setUser] = React.useState<User | null>(null);
    const [session, setSession] = React.useState<Session | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const getInitialSession = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                const initialSession = data?.session ?? null;
                setUser(initialSession?.user ?? null);
                setSession(initialSession);
            } catch (err) {
                console.error("Error getting initial session:", err);
                setUser(null);
                setSession(null);
            } finally {
                setIsLoading(false);
            }
        };

        getInitialSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, newSession) => {
            setUser(newSession?.user ?? null);
            setSession(newSession);
            setIsLoading(false);

            if (event === "SIGNED_IN") {
                const isPasswordResetTab =
                    window.location.pathname.includes("/reset-password");
                const wasPasswordReset =
                    localStorage.getItem("passwordResetDone") === "true";
                if (!isPasswordResetTab && !wasPasswordReset) {
                    router.push("/");
                }
            } else if (event === "USER_UPDATED") {
                window.location.reload();
            }
        });

        return () => subscription?.unsubscribe();
    }, [supabase, router]);

    // Listen for password reset completion flag
    React.useEffect(() => {
        const handleStorage = (e: StorageEvent) => {
            if (e.key === "passwordResetDone" && e.newValue === "true") {
                router.push("/signin");
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [session, router]);

    const signIn = async (email: string, password: string) => {
        setIsLoading(true);
        const result = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setIsLoading(false);
        return result;
    };

    const signUp = async (email: string, password: string) => {
        setIsLoading(true);
        const result = await supabase.auth.signUp({ email, password });
        setIsLoading(false);
        return result;
    };

    const signOut = async () => {
        setIsLoading(true);
        try {
            const {
                data: { session: currentSession },
            } = await supabase.auth.getSession();
            if (currentSession) {
                const { error } = await supabase.auth.signOut({
                    scope: "global",
                });
                if (error && error.status !== 403) throw error;
            }
            await supabase.auth.signOut({ scope: "local" });
            await fetch("/auth/signout", {
                method: "POST",
                credentials: "include",
            });
            router.replace("/");
        } catch (e) {
            console.warn("Signout issue:", e);
            router.replace("/");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, session, isLoading, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextValue {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
