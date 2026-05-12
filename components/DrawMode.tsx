"use client";

import * as React from "react";
import FretboardHorizontal from "@/components/FretboardHorizontal";
import FretboardVertical from "@/components/FretboardVertical";
import NotesIntervalsToggle from "@/components/NotesIntervalsToggle";
import { noteNameToSemitone, spellNote } from "@/lib/MusicTheory";
import {
    useDrawModeIndex,
    keyFromSelection,
} from "@/lib/hooks/useDrawModeIndex";
import {
    allChordShapes,
    useCycleList,
    getFinalFormulasFromMatch,
} from "@/lib/API";
import { generateAllVoicingsForShape } from "@/lib/fretboardMap";
import type { NotePosition } from "@/lib/fretboardMap";
import { SCALE_SHAPES } from "@/lib/Shapes/Scales";
import { CHORD_SHAPES } from "@/lib/Shapes/Chords";

const QUALITY_DISPLAY: Record<string, string> = {
    Maj: "Major",
    Min: "Minor",
    Aug: "Augmented",
    Dim: "Diminished",
    Maj7: "Maj 7",
    Dom7: "Dom 7",
    Min7: "Min 7",
    mMaj7: "Min/Maj 7",
    Min7b5: "Half Dim",
    Dim7: "Dim 7",
};

type ChordNode = {
    levelName?: string;
    options?: Record<string, ChordNode>;
    pattern?: { semitones: number }[];
    altShapes?: ChordNode[];
};

function getPatternSemitones(formula: ChordNode): number[] | null {
    if (!Array.isArray(formula.pattern)) return null;
    const semis = [...new Set(formula.pattern.map(n => n.semitones))].sort(
        (a, b) => a - b,
    );
    return semis.length >= 2 ? semis : null;
}

function registerFormula(
    formula: ChordNode,
    displayName: string,
    map: Map<string, string>,
) {
    const semis = getPatternSemitones(formula);
    if (semis) {
        const key = semis.join(",");
        if (!map.has(key)) map.set(key, displayName);
    }
    if (Array.isArray(formula.altShapes)) {
        for (const alt of formula.altShapes) {
            const altSemis = getPatternSemitones(alt);
            if (altSemis) {
                const key = altSemis.join(",");
                if (!map.has(key)) map.set(key, displayName);
            }
        }
    }
}

function buildChordQualityMap(shapes: ChordNode): Map<string, string> {
    const map = new Map<string, string>();

    function crawl(node: ChordNode) {
        if (!node || typeof node !== "object") return;
        if (node.levelName === "Chord Qualities" && node.options) {
            for (const [qualityKey, qualityNode] of Object.entries(
                node.options,
            )) {
                const displayName = QUALITY_DISPLAY[qualityKey] ?? qualityKey;
                if (qualityNode.levelName === "Positions" && qualityNode.options) {
                    for (const formula of Object.values(qualityNode.options)) {
                        registerFormula(formula, displayName, map);
                    }
                }
            }
            return;
        }
        if (node.options) {
            for (const child of Object.values(node.options)) crawl(child);
        }
    }

    for (const topLevel of Object.values(shapes)) {
        if (topLevel && typeof topLevel === "object") crawl(topLevel as ChordNode);
    }
    return map;
}

const CHORD_QUALITY_MAP = buildChordQualityMap(CHORD_SHAPES as unknown as ChordNode);

const STANDARD_TUNING = ["E", "B", "G", "D", "A", "E"];
const NUM_FRETS = 24;
const NOTES = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
];

const DEGREE_INDEX_BY_SEMITONES: Record<number, number> = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 5,
    10: 6,
    11: 6,
};

function semitonesToDegreeNumber(semi: number): number {
    const idx = DEGREE_INDEX_BY_SEMITONES[semi];
    return idx === 0 ? 1 : idx + 1;
}

const NATURAL_SEMITONES = [0, 2, 4, 5, 7, 9, 11];

function spellDegree(semitone: number, degreeNum: number): string {
    const natural = NATURAL_SEMITONES[degreeNum - 1];
    const diff = semitone - natural;
    const base = String(degreeNum);
    if (diff === 0) return base;
    if (diff === -1) return `b${base}`;
    if (diff === 1) return `#${base}`;
    if (diff === -2) return `bb${base}`;
    if (diff === 2) return `##${base}`;
    return base;
}

const wrap12 = (n: number) => ((n % 12) + 12) % 12;

const CHROMATIC_INTERVALS = [
    "1","b2","2","b3","3","4","b5","5","b6","6","b7","7",
];

function intervalSemitones(rootName: string, targetName: string): number {
    return wrap12(
        noteNameToSemitone(targetName) - noteNameToSemitone(rootName),
    );
}

function firstEnharmonic(cell: string): string {
    return (cell || "").split("/")[0];
}

function ChevronLeft() {
    return (
        <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
            />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
            />
        </svg>
    );
}

function HandIcon({ flipped = false }: { flipped?: boolean }) {
    return (
        <svg
            className='w-5 h-5'
            viewBox='0 0 640 640'
            fill='currentColor'
            style={flipped ? { transform: "scaleX(-1)" } : undefined}>
            <path d='M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 304C288 312.8 280.8 320 272 320C263.2 320 256 312.8 256 304L256 128C256 110.3 241.7 96 224 96C206.3 96 192 110.3 192 128L192 400C192 401.5 192 403.1 192.1 404.6L131.6 347C115.6 331.8 90.3 332.4 75 348.4C59.7 364.4 60.4 389.7 76.4 405L188.8 512C231.9 553.1 289.2 576 348.8 576L368 576C465.2 576 544 497.2 544 400L544 192C544 174.3 529.7 160 512 160C494.3 160 480 174.3 480 192L480 304C480 312.8 472.8 320 464 320C455.2 320 448 312.8 448 304L448 128C448 110.3 433.7 96 416 96C398.3 96 384 110.3 384 128L384 304C384 312.8 376.8 320 368 320C359.2 320 352 312.8 352 304L352 96z' />
        </svg>
    );
}

export default function DrawMode() {
    const [root, setRoot] = React.useState("C");
    const [showIntervals, setShowIntervals] = React.useState(true);
    const [rootMenuOpen, setRootMenuOpen] = React.useState(false);
    const [isRight, setIsRight] = React.useState(true);
    // Set of "string:fret" keys — allows multiple notes per string for scale drawing
    const [selected, setSelected] = React.useState(new Set<string>());
    const [matchInfo, setMatchInfo] = React.useState<any>(null);
    const [selectedPosition, setSelectedPosition] = React.useState("");
    const [selectedAltShape, setSelectedAltShape] = React.useState(0);
    const [browsedVoicing, setBrowsedVoicing] = React.useState<
        NotePosition[] | null
    >(null);

    const handedness = isRight ? "right" : "left";

    const { index, fretboardMap } = useDrawModeIndex({
        allChordShapes,
        tuning: STANDARD_TUNING,
        numFrets: NUM_FRETS,
        rootNote: root,
    });

    const { finalFormulas, posKey } = React.useMemo(
        () => getFinalFormulasFromMatch(allChordShapes, matchInfo),
        [matchInfo],
    );

    // One-note-per-string map derived from selected — used for chord matching only
    const selectedAsMap = React.useMemo(() => {
        const map = new Map<number, number>();
        for (const key of selected) {
            const [s, f] = key.split(":").map(Number);
            if (!map.has(s) || f < map.get(s)!) map.set(s, f);
        }
        return map;
    }, [selected]);

    const toggle = React.useCallback((string: number, fret: number) => {
        setSelected(prev => {
            const next = new Set(prev);
            const key = `${string}:${fret}`;
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }, []);

    const clearAll = () => setSelected(new Set());

    const pickVoicingFor = React.useCallback(
        (posKeyToUse: string, altIdxToUse: number): NotePosition[] | null => {
            if (!finalFormulas || !finalFormulas[posKeyToUse]) return null;
            const posData = finalFormulas[posKeyToUse] as any;
            const formula =
                (Number.isInteger(altIdxToUse) &&
                    posData.altShapes?.[altIdxToUse]) ||
                posData;
            if (!formula) return null;
            const raw =
                generateAllVoicingsForShape(root, formula, fretboardMap) || [];
            const voicings = Array.isArray(raw[0]) ? raw : [raw];
            const targetSize = selectedAsMap.size;
            const drawStrings = new Set(Array.from(selectedAsMap.keys()));
            const best =
                voicings.find(
                    v =>
                        Array.isArray(v) &&
                        v.length === targetSize &&
                        v.every((n: any) => drawStrings.has(n.string)),
                ) || voicings[0];
            if (!best) return null;
            return (best as NotePosition[])
                .slice()
                .sort(
                    (a, b) =>
                        a.string - b.string || (a.fret ?? 0) - (b.fret ?? 0),
                );
        },
        [finalFormulas, root, fretboardMap, selectedAsMap],
    );

    const chordShape: NotePosition[] = React.useMemo(() => {
        if (browsedVoicing?.length) return browsedVoicing;
        const shape: NotePosition[] = [];
        for (const key of selected) {
            const [string, fret] = key.split(":").map(Number);
            const cell = fretboardMap[string]?.[fret];
            if (!cell) continue;
            const name = firstEnharmonic(cell);
            const semis = intervalSemitones(root, name);
            shape.push({
                string,
                fret,
                semitones: semis,
                degree: semitonesToDegreeNumber(semis),
            });
        }
        return shape.sort(
            (a, b) => a.string - b.string || (a.fret ?? 0) - (b.fret ?? 0),
        );
    }, [selected, fretboardMap, root, browsedVoicing]);

    // Unique note names and intervals for the freeform label
    type ScaleMatch = {
        scaleName: string;
        modeName?: string;
        exact: boolean;
        degreeMap: Map<number, number> | null;
    };
    const scaleMatches = React.useMemo((): ScaleMatch[] => {
        const drawnSemis = [
            ...new Set(chordShape.map(n => n.semitones ?? 0)),
        ].sort((a, b) => a - b);
        if (drawnSemis.length < 3) return [];

        const results: ScaleMatch[] = [];
        for (const scales of Object.values(SCALE_SHAPES)) {
            for (const entry of Object.values(scales)) {
                for (let d = 0; d < entry.intervals.length; d++) {
                    const pivot = entry.intervals[d];
                    const rotatedArr = entry.intervals
                        .map(i => (i - pivot + 12) % 12)
                        .sort((a, b) => a - b);
                    const rotated = new Set(rotatedArr);
                    if (!drawnSemis.every(s => rotated.has(s))) continue;
                    // Only build a degree map for 7-note scales — positional
                    // index = scale degree only holds when all 7 degrees are present.
                    const degreeMap =
                        rotatedArr.length === 7
                            ? new Map<number, number>(
                                  rotatedArr.map((s, idx) => [s, idx + 1]),
                              )
                            : null;
                    results.push({
                        scaleName: entry.name,
                        modeName: entry.positions[d]?.modeName,
                        exact: drawnSemis.length === rotated.size,
                        degreeMap,
                    });
                }
            }
        }

        const seen = new Set<string>();
        return results
            .sort((a, b) => Number(b.exact) - Number(a.exact))
            .filter(r => {
                const key = `${r.scaleName}|${r.modeName ?? ""}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });
    }, [chordShape]);

    // First scale match that has a valid 7-note degree map for correct spelling
    const spellDegreeMap = React.useMemo(
        () => scaleMatches.find(m => m.degreeMap != null)?.degreeMap ?? null,
        [scaleMatches],
    );

    const drawnNotes = React.useMemo(() => {
        const semis = [...new Set(chordShape.map(n => n.semitones ?? 0))].sort(
            (a, b) => a - b,
        );
        return semis
            .map(s => {
                const deg = spellDegreeMap?.get(s) ?? semitonesToDegreeNumber(s);
                return spellNote(root, s, deg);
            })
            .join("  ");
    }, [chordShape, root, spellDegreeMap]);

    const drawnIntervals = React.useMemo(() => {
        const semis = [...new Set(chordShape.map(n => n.semitones ?? 0))].sort(
            (a, b) => a - b,
        );
        return semis
            .map(s => {
                if (spellDegreeMap) {
                    const deg = spellDegreeMap.get(s);
                    if (deg != null) return spellDegree(s, deg);
                }
                return CHROMATIC_INTERVALS[s] ?? "?";
            })
            .join("  ");
    }, [chordShape, spellDegreeMap]);

    const freeformLabel = showIntervals ? drawnIntervals : drawnNotes;

    const correctedChordShape = React.useMemo(() => {
        if (!spellDegreeMap) return chordShape;
        return chordShape.map(pos => {
            const deg = spellDegreeMap.get(pos.semitones ?? 0);
            return deg != null ? { ...pos, degree: deg } : pos;
        });
    }, [chordShape, spellDegreeMap]);

    React.useEffect(() => {
        if (!selectedAsMap.size) {
            setMatchInfo(null);
            return;
        }
        const hit =
            index.get(`${root}::${keyFromSelection(selectedAsMap)}`) || null;
        setMatchInfo(hit);
    }, [selectedAsMap, index, root]);

    const positions = React.useMemo(
        () => (finalFormulas ? Object.keys(finalFormulas) : []),
        [finalFormulas],
    );

    React.useEffect(() => {
        if (!matchInfo || !finalFormulas) {
            setSelectedPosition("");
            setSelectedAltShape(0);
            return;
        }
        const keys = Object.keys(finalFormulas);
        if (!selectedPosition || !finalFormulas[selectedPosition]) {
            setSelectedPosition(
                posKey && finalFormulas[posKey] ? posKey : keys[0] || "",
            );
        }
        const posData = finalFormulas[
            selectedPosition || posKey || keys[0]
        ] as any;
        const altCount = 1 + (posData?.altShapes?.length || 0);
        if (selectedAltShape >= altCount) setSelectedAltShape(0);
    }, [matchInfo, finalFormulas, posKey, selectedPosition, selectedAltShape]);

    const chordIntervalMatch = React.useMemo(() => {
        if (!chordShape.length) return null;
        const semis = [...new Set(chordShape.map(n => n.semitones ?? 0))].sort(
            (a, b) => a - b,
        );
        return CHORD_QUALITY_MAP.get(semis.join(",")) ?? null;
    }, [chordShape]);

    const chordIntervalLabel = chordIntervalMatch ? `${root} ${chordIntervalMatch}` : "";

    const lastFamilyRef = React.useRef("");
    const familyKey = matchInfo
        ? `${matchInfo.difficulty}|${matchInfo.category}|${(matchInfo.trail || []).join(">")}`
        : "";

    React.useEffect(() => {
        if (!matchInfo || !finalFormulas) {
            setSelectedPosition("");
            setSelectedAltShape(0);
            lastFamilyRef.current = "";
            return;
        }
        if (familyKey !== lastFamilyRef.current) {
            lastFamilyRef.current = familyKey;
            const keys = Object.keys(finalFormulas);
            const nextPos =
                matchInfo.posKey && finalFormulas[matchInfo.posKey]
                    ? matchInfo.posKey
                    : keys[0] || "";
            setSelectedPosition(nextPos);
            const altCount =
                1 + ((finalFormulas[nextPos] as any)?.altShapes?.length || 0);
            setSelectedAltShape(Math.min(matchInfo.altIdx ?? 0, altCount - 1));
        }
    }, [familyKey, matchInfo, finalFormulas, root]);

    React.useEffect(() => {
        setBrowsedVoicing(null);
    }, [selected]);
    React.useEffect(() => {
        setBrowsedVoicing(null);
    }, [familyKey]);

    const availableAltsForUI = React.useMemo(() => {
        if (
            !finalFormulas ||
            !selectedPosition ||
            !finalFormulas[selectedPosition]
        )
            return [];
        const base = finalFormulas[selectedPosition] as any;
        return [base, ...(Array.isArray(base.altShapes) ? base.altShapes : [])];
    }, [finalFormulas, selectedPosition]);

    const safeCurrent = positions.includes(selectedPosition)
        ? selectedPosition
        : positions[0] || "";
    const { prev: goPrevPos, next: goNextPos } = useCycleList(
        positions,
        safeCurrent,
        p => {
            setSelectedPosition(p);
            setBrowsedVoicing(pickVoicingFor(p, selectedAltShape));
        },
    );
    const { prev: goPrevAlt, next: goNextAlt } = useCycleList(
        availableAltsForUI,
        selectedAltShape,
        idx => {
            setSelectedAltShape(idx as unknown as number);
            setBrowsedVoicing(
                pickVoicingFor(selectedPosition, idx as unknown as number),
            );
        },
    );

    const getQuality = (info: any) =>
        Array.isArray(info?.trail) && info.trail.length
            ? info.trail[info.trail.length - 1]
            : "";

    const chordLabel = matchInfo ? `${root} ${getQuality(matchInfo)}` : "";

    const cycleBtn =
        "w-7 h-7 flex items-center justify-center rounded-full border border-ink/40 hover:border-ink transition-colors";

    return (
        <div className='flex-1 min-h-0 flex flex-col text-ink'>
            {/* ── MOBILE (max-sm) ─────────────────────────────────────── */}
            <div className='sm:hidden flex-1 min-h-0 flex flex-col'>
                {/* Chord / scale label */}
                <div className='text-center px-4 pt-1 shrink-0'>
                    <span className='text-2xl font-bold tracking-tight'>
                        {chordLabel || chordIntervalLabel ||
                            (chordShape.length > 0 ? freeformLabel : root)}
                    </span>
                    {!chordLabel && scaleMatches.length > 0 && (
                        <p className='text-xs font-semibold text-ink/50 mt-0.5 leading-relaxed'>
                            {scaleMatches.map((m, i) => (
                                <React.Fragment key={`${m.scaleName}|${m.modeName ?? ""}`}>
                                    {i > 0 && <span className='mx-1'>·</span>}
                                    <span className={m.exact ? "" : "opacity-60"}>
                                        {m.modeName ?? m.scaleName}
                                        {!m.exact && scaleMatches.length > 1 && " *"}
                                    </span>
                                </React.Fragment>
                            ))}
                        </p>
                    )}
                </div>

                {/* Fretboard */}
                <div className='flex-1 min-h-0'>
                    <FretboardVertical
                        chordShape={correctedChordShape}
                        handedness={handedness}
                        interactive
                        onTogglePosition={({ string, fret }) =>
                            toggle(string, fret)
                        }
                        rootNote={root}
                        showIntervals={showIntervals}
                        showConnector={chordShape.length > 0}
                    />
                </div>

                {/* Position / alt strip */}
                {positions.length > 0 && (
                    <div className='shrink-0 border-t border-ink/20 bg-sand-1 px-3 py-1.5 flex items-center justify-center gap-1'>
                        <button
                            onClick={goPrevPos}
                            className={cycleBtn}>
                            <ChevronLeft />
                        </button>
                        <span className='text-xs font-semibold text-ink min-w-[5rem] text-center'>
                            {(finalFormulas as any)?.[selectedPosition]?.name ||
                                selectedPosition ||
                                "–"}
                        </span>
                        <button
                            onClick={goNextPos}
                            className={cycleBtn}>
                            <ChevronRight />
                        </button>

                        {availableAltsForUI.length > 1 && (
                            <>
                                <div className='w-px h-4 bg-ink/20 mx-1' />
                                <button
                                    onClick={goPrevAlt}
                                    className={cycleBtn}>
                                    <ChevronLeft />
                                </button>
                                <span className='text-xs font-semibold text-ink w-8 text-center'>
                                    {selectedAltShape + 1}/
                                    {availableAltsForUI.length}
                                </span>
                                <button
                                    onClick={goNextAlt}
                                    className={cycleBtn}>
                                    <ChevronRight />
                                </button>
                            </>
                        )}
                    </div>
                )}

                {/* Control strip */}
                <div className='shrink-0 border-t border-ink/20 bg-sand-1 px-4 pt-2 pb-4 flex items-center gap-3'>
                    <button
                        onClick={() => setRootMenuOpen(true)}
                        className='px-3 py-1.5 bg-ink text-sand-1 text-xs font-bold rounded-full'>
                        {root}
                    </button>

                    {rootMenuOpen && (
                        <div
                            className='fixed inset-0 z-50 flex items-end justify-start bg-black/30 pb-17 pl-4'
                            onClick={() => setRootMenuOpen(false)}>
                            <div
                                className='bg-sand-2 rounded-xl shadow-xl p-2 max-h-56 overflow-y-auto grid grid-cols-3 gap-1'
                                onClick={e => e.stopPropagation()}>
                                {NOTES.map(n => (
                                    <button
                                        key={n}
                                        onClick={() => {
                                            setRoot(n);
                                            setRootMenuOpen(false);
                                        }}
                                        className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${n === root ? "bg-sand-4 text-sand-1" : "bg-sand-1 text-ink hover:bg-sand-3"}`}>
                                        {n}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <NotesIntervalsToggle
                        showIntervals={showIntervals}
                        onToggle={setShowIntervals}
                    />

                    <button
                        onClick={() => setIsRight(h => !h)}
                        title={isRight ? "Right hand" : "Left hand"}
                        className='w-9 h-9 flex items-center justify-center rounded-full border border-ink/40 text-ink hover:border-ink transition-colors'>
                        <HandIcon flipped={!isRight} />
                    </button>

                    <div className='flex-1' />

                    <button
                        onClick={clearAll}
                        className='px-4 py-1.5 text-xs font-semibold text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors'>
                        Clear
                    </button>
                </div>
            </div>

            {/* ── DESKTOP (sm+) ───────────────────────────────────────── */}
            <div className='hidden sm:flex flex-1 min-h-0 flex-col items-center gap-4 py-4'>
                {/* Chord label */}
                <div className='text-center px-4 w-full shrink-0'>
                    <span className='text-3xl font-bold tracking-tight'>
                        {chordLabel || chordIntervalLabel ||
                            (chordShape.length > 0 ? freeformLabel : root)}
                    </span>
                    {!chordLabel && scaleMatches.length > 0 && (
                        <p className='text-xs font-semibold text-ink/50 mt-0.5 leading-relaxed'>
                            {scaleMatches.map((m, i) => (
                                <React.Fragment key={`${m.scaleName}|${m.modeName ?? ""}`}>
                                    {i > 0 && <span className='mx-1'>·</span>}
                                    <span className={m.exact ? "" : "opacity-60"}>
                                        {m.modeName ?? m.scaleName}
                                        {!m.exact && scaleMatches.length > 1 && " *"}
                                    </span>
                                </React.Fragment>
                            ))}
                        </p>
                    )}
                </div>

                {/* Fretboard */}
                <div className='w-full px-4 shrink-0'>
                    <FretboardHorizontal
                        chordShape={correctedChordShape}
                        handedness={handedness}
                        interactive
                        onTogglePosition={({ string, fret }) =>
                            toggle(string, fret)
                        }
                        rootNote={root}
                        showIntervals={showIntervals}
                    />
                </div>

                {/* Root grid */}
                <div className='flex flex-col items-center gap-1.5 shrink-0'>
                    <span className='text-xs font-semibold text-ink/60'>
                        Root
                    </span>
                    <div className='grid grid-cols-9 gap-1 max-w-2xl'>
                        {NOTES.map(n => (
                            <button
                                key={n}
                                onClick={() => setRoot(n)}
                                className={`px-3 py-1.5 text-sm font-semibold rounded border transition-colors ${
                                    n === root
                                        ? "bg-sand-4 text-sand-1 border-ink"
                                        : "bg-sand-1 text-ink border-ink/40 hover:border-ink"
                                }`}>
                                {n}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Position + alt + controls row */}
                <div className='flex flex-wrap items-end justify-center gap-4 px-4 shrink-0'>
                    {positions.length > 0 && (
                        <div className='flex flex-col items-center gap-1.5'>
                            <span className='text-xs font-semibold text-ink/60'>
                                Position
                            </span>
                            <div className='flex rounded overflow-hidden border border-ink'>
                                {positions.map(pos => (
                                    <button
                                        key={pos}
                                        onClick={() => {
                                            setSelectedPosition(pos);
                                            setBrowsedVoicing(
                                                pickVoicingFor(
                                                    pos,
                                                    selectedAltShape,
                                                ),
                                            );
                                        }}
                                        className={`px-3 py-1.5 text-sm font-medium border-r border-ink last:border-r-0 transition-colors ${
                                            selectedPosition === pos
                                                ? "bg-sand-4 text-sand-1 font-semibold"
                                                : "bg-sand-1 text-ink hover:bg-sand-2"
                                        }`}>
                                        {(finalFormulas?.[pos] as { name?: string } | null)?.name ||
                                            pos}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {availableAltsForUI.length > 1 && (
                        <div className='flex flex-col items-center gap-1.5'>
                            <span className='text-xs font-semibold text-ink/60'>
                                Alternate Positions
                            </span>
                            <div className='flex items-center gap-2 border border-ink rounded overflow-hidden'>
                                <button
                                    onClick={goPrevAlt}
                                    className='px-2 py-1.5 bg-sand-2 text-ink hover:bg-sand-3 transition-colors border-r border-ink'>
                                    <ChevronLeft />
                                </button>
                                <span className='px-3 text-sm font-medium text-ink'>
                                    {selectedAltShape + 1}/
                                    {availableAltsForUI.length}
                                </span>
                                <button
                                    onClick={goNextAlt}
                                    className='px-2 py-1.5 bg-sand-2 text-ink hover:bg-sand-3 transition-colors border-l border-ink'>
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={() => setIsRight(h => !h)}
                        className='flex items-center gap-2 px-4 py-2 rounded-full border border-ink bg-sand-2 text-ink text-sm font-semibold hover:bg-sand-3 transition-colors'>
                        <HandIcon flipped={!isRight} />
                        {isRight ? "Right hand" : "Left hand"}
                    </button>

                    <NotesIntervalsToggle
                        showIntervals={showIntervals}
                        onToggle={setShowIntervals}
                    />

                    <button
                        onClick={clearAll}
                        className='px-4 py-1.5 text-sm font-semibold text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
