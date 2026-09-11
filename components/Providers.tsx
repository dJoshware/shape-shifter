"use client";

import { AuthProvider } from "@/lib/contexts/AuthContext";
import { PreferencesProvider } from "@/lib/contexts/PreferencesContext";
import SupabaseProvider from "@/components/SupabaseProvider";
import ThemeProvider from "@/components/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <SupabaseProvider>
                <AuthProvider>
                    <PreferencesProvider>{children}</PreferencesProvider>
                </AuthProvider>
            </SupabaseProvider>
        </ThemeProvider>
    );
}
