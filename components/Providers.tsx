"use client";

import { AuthProvider } from "@/lib/contexts/AuthContext";
import SupabaseProvider from "@/components/SupabaseProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SupabaseProvider>
            <AuthProvider>{children}</AuthProvider>
        </SupabaseProvider>
    );
}
