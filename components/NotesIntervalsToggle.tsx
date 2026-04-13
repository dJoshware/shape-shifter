"use client";

type Props = {
    showIntervals: boolean;
    onToggle: (val: boolean) => void;
};

export default function NotesIntervalsToggle({
    showIntervals,
    onToggle,
}: Props) {
    return (
        <div className='flex items-center gap-1.5'>
            {/* Mobile: single square toggle button */}
            <button
                onClick={() => onToggle(!showIntervals)}
                className={`
                    sm:hidden
                    w-10 h-10 flex items-center justify-center
                    bg-sand-4 border border-ink rounded text-sand-1
                    ${showIntervals ? "text-2xl" : "text-sm"} font-bold leading-tight
                    active:opacity-80 transition-opacity
                    `}
                title={showIntervals ? "Show note names" : "Show intervals"}>
                {showIntervals ? "♩" : "ABC"}
            </button>

            {/* Tablet/desktop: Notes ⟵ switch ⟶ Intervals */}
            <div className='hidden sm:flex items-center gap-2'>
                <span
                    className={`text-sm transition-all ${!showIntervals ? "font-semibold" : "text-ink/60"}`}>
                    Notes
                </span>
                <button
                    role='switch'
                    aria-checked={showIntervals}
                    onClick={() => onToggle(!showIntervals)}
                    className={`
                        relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none
                        ${showIntervals ? "bg-olive" : "bg-sand-3"}
                    `}>
                    <span
                        className={`
                        absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-ink shadow transition-transform duration-200
                        ${showIntervals ? "translate-x-5" : "translate-x-0"}
                        `}
                    />
                </button>
                <span
                    className={`text-sm transition-all ${showIntervals ? "font-semibold" : "text-ink/60"}`}>
                    Intervals
                </span>
            </div>
        </div>
    );
}
