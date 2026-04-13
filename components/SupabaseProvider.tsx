"use client";

import * as React from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function SupabaseProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = React.useMemo(
        () =>
            createBrowserClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            ),
        [],
    );

    React.useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            fetch("/auth/callback", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event, session }),
            });
        });

        const refresh = () => supabase.auth.getSession();
        const onFocus = () => refresh();
        const onVisible = () => {
            if (!document.hidden) refresh();
        };

        window.addEventListener("focus", onFocus);
        document.addEventListener("visibilitychange", onVisible);

        return () => {
            subscription?.unsubscribe();
            window.removeEventListener("focus", onFocus);
            document.removeEventListener("visibilitychange", onVisible);
        };
    }, [supabase]);

    return <>{children}</>;
}
