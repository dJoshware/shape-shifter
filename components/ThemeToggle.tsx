"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const OPTIONS = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
] as const;

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        // next-themes only knows the real value once mounted on the client.
        setMounted(true);
    }, []);

    return (
        <div className='flex rounded-xl overflow-hidden border border-sand-1/20'>
            {OPTIONS.map(({ value, label }, i) => {
                const active = mounted && theme === value;
                return (
                    <button
                        key={value}
                        onClick={() => setTheme(value)}
                        className={`flex-1 py-2.5 text-sm font-medium transition-colors ${i > 0 ? "border-l border-sand-1/20" : ""} ${
                            active
                                ? "bg-sand-1 text-sand-4 font-semibold"
                                : "text-sand-1/60 hover:text-sand-1/80"
                        }`}>
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
