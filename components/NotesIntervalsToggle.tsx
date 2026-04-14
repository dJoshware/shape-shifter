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
                className={`sm:hidden w-9 h-9 flex items-center justify-center rounded-full border border-ink/40 text-ink hover:border-ink transition-colors ${showIntervals ? "text-xl" : "text-xs"} font-bold leading-tight active:opacity-80`}
                title={showIntervals ? "Show note names" : "Show intervals"}>
                {showIntervals ? "♩" : "ABC"}
            </button>

            {/* Tablet/desktop: pill button matching Shuffle / Right hand */}
            <button
                onClick={() => onToggle(!showIntervals)}
                className='hidden sm:flex items-center px-4 py-2 rounded-full border border-ink bg-sand-2 text-ink text-sm font-semibold hover:bg-sand-3 transition-colors'>
                {showIntervals ? "Intervals" : "Notes"}
            </button>
        </div>
    );
}
