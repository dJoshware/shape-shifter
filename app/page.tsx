"use client";

import * as React from "react";
import Header from "@/components/Header";
import FretboardHorizontal from "@/components/FretboardHorizontal";
import FretboardVertical from "@/components/FretboardVertical";
import NotesIntervalsToggle from "@/components/NotesIntervalsToggle";
import DrawMode from "@/components/DrawMode";
import {
    generateFretboardMap,
    generateAllVoicingsForShape,
    NOTES,
    shuffleArray,
} from "@/lib/fretboardMap";
import type { NotePosition } from "@/lib/fretboardMap";

type ChordLevel = {
    levelName?: string;
    options?: Record<string, ChordLevel>;
    altShapes?: ChordLevel[];
    pattern?: Array<{
        string: number;
        fretOffset: number;
        semitones: number;
        degree: number;
    }>;
    rootString?: number;
};
import { allChordShapes, useCycleList } from "@/lib/API";
import { spellInterval, MAJOR_SCALE_OFFSETS } from "@/lib/ChordSpelling";
import useChordLibrary from "@/lib/hooks/useChordLibrary";

const TUNING = ["E", "B", "G", "D", "A", "E"];
const NUM_FRETS = 24;
const SEMIS = [...Array(12).keys()];

// ─── small reusable pieces ────────────────────────────────────────────────────

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

function FilterIcon() {
    return (
        <svg
            className='w-3.5 h-3.5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M7 12h10M10 18h4'
            />
        </svg>
    );
}

function ShuffleIcon() {
    return (
        <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            viewBox='0 0 24 24'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
        </svg>
    );
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function Home() {
    // ── state ──────────────────────────────────────────────────────────────────
    const [difficulty, setDifficulty] = React.useState("Beginner");
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [selectedVoicingType, setSelectedVoicingType] =
        React.useState("Drop 2");
    const [selectedStringSet, setSelectedStringSet] =
        React.useState("High String Set");
    const [selectedChordQuality, setSelectedChordQuality] =
        React.useState("Maj7");
    const [selectedPosition, setSelectedPosition] = React.useState("All");
    const [selectedAltShape, setSelectedAltShape] = React.useState(0);
    const [currentRootNote, setCurrentRootNote] = React.useState("C");
    const [displayShape, setDisplayShape] = React.useState<NotePosition[]>([]);
    const [noteDeck, setNoteDeck] = React.useState<number[]>([]);
    const [shuffleChecked, setShuffleChecked] = React.useState(false);
    const [showIntervals, setShowIntervals] = React.useState(false);
    const [isRight, setIsRight] = React.useState(true);
    const handedness = isRight ? "right" : "left";

    const [filtersOpen, setFiltersOpen] = React.useState(false);

    const fretboardMap = React.useMemo(
        () => generateFretboardMap(TUNING, NUM_FRETS),
        [],
    );
    const isDrawMode = difficulty === "Draw Mode";

    const { selectionHierarchy, availableAlts } = useChordLibrary({
        allChordShapes,
        difficulty,
        selectedCategory,
        selectedVoicingType,
        selectedStringSet,
        selectedChordQuality,
        selectedPosition,
    });

    // ── hierarchy helpers ──────────────────────────────────────────────────────
    const getSetterForLevel = (levelName: string) => {
        switch (levelName) {
            case "Voicing Types":
                return setSelectedVoicingType;
            case "String Sets":
                return setSelectedStringSet;
            case "Chord Qualities":
                return setSelectedChordQuality;
            default:
                return () => {};
        }
    };

    const drillDownAndSetDefaults = (
        startLevel: ChordLevel | null | undefined,
    ) => {
        let currentLevel = startLevel;
        if (!currentLevel) return;
        let newVoicingType = "";
        let newStringSet = "";
        let newChordQuality = "";
        while (currentLevel && currentLevel.levelName && currentLevel.options) {
            const options: Record<string, ChordLevel> = currentLevel.options;
            const firstOption: string | undefined = Object.keys(options)[0];
            if (!firstOption) break;
            if (currentLevel.levelName === "Voicing Types")
                newVoicingType = firstOption;
            else if (currentLevel.levelName === "String Sets")
                newStringSet = firstOption;
            else if (currentLevel.levelName === "Chord Qualities")
                newChordQuality = firstOption;
            currentLevel = currentLevel.options[firstOption];
        }
        setSelectedVoicingType(newVoicingType);
        setSelectedStringSet(newStringSet);
        setSelectedChordQuality(newChordQuality);
    };

    const handleDifficultyChange = (newDifficulty: string) => {
        setDifficulty(newDifficulty);
        if (newDifficulty === "Draw Mode") {
            setSelectedCategory("");
            setSelectedPosition("All");
            setSelectedAltShape(0);
            return;
        }
        const difficultyData =
            (allChordShapes as Record<string, Record<string, ChordLevel>>)[
                newDifficulty
            ] ?? {};
        const firstCategory = Object.keys(difficultyData)[0] || "";
        setSelectedCategory(firstCategory);
        setSelectedPosition("All");
        setSelectedAltShape(0);
        drillDownAndSetDefaults(difficultyData[firstCategory]);
    };

    const handleCategoryChange = (newCategory: string) => {
        setSelectedCategory(newCategory);
        setSelectedPosition("All");
        setSelectedAltShape(0);
        drillDownAndSetDefaults(
            (allChordShapes as Record<string, Record<string, ChordLevel>>)[
                difficulty
            ]?.[newCategory],
        );
    };

    const handlePositionChange = (newPosition: string) => {
        setSelectedPosition(newPosition);
        setSelectedAltShape(0);
    };

    // ── generate new root ──────────────────────────────────────────────────────
    const handleGenerateNewRoot = () => {
        const deck = noteDeck.length ? [...noteDeck] : shuffleArray(SEMIS);
        const nextSem = deck.pop()!;
        setNoteDeck(deck);
        const candidates = NOTES[nextSem];

        if (!shuffleChecked) {
            const simple =
                candidates.find(r => !r.includes("#") && !r.includes("b")) ||
                candidates[1] ||
                candidates[0];
            setCurrentRootNote(simple);
            return;
        }

        const newSelections = {
            voicingType: "",
            stringSet: "",
            quality: "",
            position: "",
            altShape: 0,
        };
        let cursor: ChordLevel | undefined = (
            allChordShapes as Record<string, Record<string, ChordLevel>>
        )[difficulty]?.[selectedCategory];
        while (cursor && cursor.options && cursor.levelName !== "Positions") {
            const levelName = cursor.levelName;
            const options: Record<string, ChordLevel> = cursor.options;
            const keys = Object.keys(options);
            const pick = keys[Math.floor(Math.random() * keys.length)];
            if (levelName === "Voicing Types") newSelections.voicingType = pick;
            else if (levelName === "String Sets")
                newSelections.stringSet = pick;
            else if (levelName === "Chord Qualities")
                newSelections.quality = pick;
            cursor = options[pick];
        }

        if (!cursor?.options) return;
        const posKeys = Object.keys(cursor.options);
        newSelections.position =
            posKeys[Math.floor(Math.random() * posKeys.length)];
        const pd = cursor.options[newSelections.position];
        newSelections.altShape =
            Array.isArray(pd.altShapes) && pd.altShapes.length
                ? Math.floor(Math.random() * pd.altShapes.length)
                : 0;

        const positionData = cursor.options[newSelections.position];
        const formula = Array.isArray(positionData.altShapes)
            ? positionData.altShapes[newSelections.altShape]
            : positionData;
        const pattern = formula.pattern!;

        function isCleanRoot(root: string) {
            if (root === "B#" || root === "E#") return false;
            return pattern.every(
                ({
                    semitones,
                    degree,
                }: {
                    semitones: number;
                    degree: number;
                }) => {
                    const label = spellInterval(root, semitones, degree);
                    if (
                        degree !== 1 &&
                        MAJOR_SCALE_OFFSETS[degree] !== semitones
                    ) {
                        return /^[#b][2-7]$/.test(label);
                    } else {
                        return !/^[#b]/.test(label);
                    }
                },
            );
        }

        const valid = candidates.filter(isCleanRoot);
        let rootName: string;
        if (valid.length > 1) {
            rootName = valid[Math.floor(Math.random() * valid.length)];
        } else if (valid.length === 1) {
            rootName = valid[0];
        } else {
            rootName =
                candidates.find(isCleanRoot) ||
                candidates.find(r => !r.includes("#") && !r.includes("b")) ||
                candidates[0];
        }

        setCurrentRootNote(rootName);
        setSelectedVoicingType(newSelections.voicingType);
        setSelectedStringSet(newSelections.stringSet);
        setSelectedChordQuality(newSelections.quality);
        setSelectedPosition(newSelections.position);
        setSelectedAltShape(newSelections.altShape);
    };

    // ── effects ────────────────────────────────────────────────────────────────
    React.useEffect(() => {
        const difficultyData = (
            allChordShapes as Record<string, Record<string, ChordLevel>>
        )[difficulty];
        const categories = Object.keys(difficultyData || {});
        if (!categories.includes(selectedCategory)) {
            const firstCategory = categories[0] || "";
            setSelectedCategory(firstCategory);
            drillDownAndSetDefaults(difficultyData?.[firstCategory]);
        }
    }, [difficulty, selectedCategory]);

    React.useEffect(() => {
        handleDifficultyChange("Beginner");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(() => {
        if (isDrawMode) return;
        const formulas = selectionHierarchy.finalFormulas;
        if (!currentRootNote || !formulas) {
            setDisplayShape([]);
            return;
        }

        const finalShapes: NotePosition[][] = [];
        if (selectedPosition === "All") {
            for (const posName in formulas) {
                const positionData = formulas[posName];
                finalShapes.push(
                    ...generateAllVoicingsForShape(
                        currentRootNote,
                        positionData,
                        fretboardMap,
                    ),
                );
                if (positionData.altShapes) {
                    for (const altFormula of positionData.altShapes) {
                        finalShapes.push(
                            ...generateAllVoicingsForShape(
                                currentRootNote,
                                altFormula,
                                fretboardMap,
                            ),
                        );
                    }
                }
            }
            setDisplayShape(finalShapes.flat());
        } else {
            if (availableAlts.length > 0 && availableAlts[selectedAltShape]) {
                const voicings = generateAllVoicingsForShape(
                    currentRootNote,
                    availableAlts[selectedAltShape],
                    fretboardMap,
                );
                setDisplayShape(voicings.flat());
            } else {
                setDisplayShape([]);
            }
        }
    }, [
        isDrawMode,
        currentRootNote,
        selectedPosition,
        selectedAltShape,
        selectionHierarchy.finalFormulas,
        availableAlts,
        fretboardMap,
    ]);

    // ── cycle controls ─────────────────────────────────────────────────────────
    const { prev: goPrevPos, next: goNextPos } = useCycleList(
        selectionHierarchy.positions,
        selectedPosition,
        handlePositionChange,
        { allToken: "All" },
    );

    const { prev: goPrevAlt, next: goNextAlt } = useCycleList(
        availableAlts,
        selectedAltShape,
        (i: number) => setSelectedAltShape(i),
    );

    // ── chord label ─────────────────────────────────────────────────────────────
    const chordLabel =
        selectedCategory === "CAGED"
            ? currentRootNote
            : `${currentRootNote} ${selectedChordQuality}`;

    // ── sub-level value helper ─────────────────────────────────────────────────
    const getSubLevelValue = (levelName: string) => {
        if (levelName === "Voicing Types") return selectedVoicingType;
        if (levelName === "String Sets") return selectedStringSet;
        return selectedChordQuality;
    };

    // ── mobile sub-level compact labels ───────────────────────────────────────
    const firstWord = (s: string) => (s ?? "").trim().split(/\s+/, 1)[0];

    // ─────────────────────────────────────────────────────────────────────────
    return (
        <>
            <Header
                difficulty={difficulty}
                onDifficultyChange={handleDifficultyChange}
            />

            <main className='flex-1 min-h-0 flex flex-col'>
                {isDrawMode ? (
                    <DrawMode />
                ) : (
                    <>
                        {/* ── MOBILE layout (max-sm) ───────────────────────────────── */}
                        <div className='sm:hidden flex-1 min-h-0 flex flex-col'>
                            {/* Chord name */}
                            <div className='shrink-0 text-center pt-3 pb-2 px-4'>
                                <span className='text-3xl font-bold text-ink tracking-tight'>
                                    {chordLabel}
                                </span>
                            </div>

                            {/* Full-width fretboard */}
                            <div className='flex-1 min-h-0'>
                                <FretboardVertical
                                    chordShape={displayShape}
                                    handedness={handedness}
                                    rootNote={currentRootNote}
                                    showIntervals={showIntervals}
                                />
                            </div>

                            {/* Control strip — position / alt navigation */}
                            <div className='shrink-0 border-t border-ink/20 bg-sand-1 px-3 py-2 flex items-center gap-1.5 min-h-[2.75rem]'>
                                <button
                                    onClick={() => setFiltersOpen(true)}
                                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink/40 text-ink text-xs font-semibold hover:border-ink transition-colors'>
                                    <FilterIcon />
                                    Filters
                                </button>

                                <div className='flex-1' />

                                {selectionHierarchy.positions.length > 0 && (
                                    <div className='flex items-center gap-1'>
                                        <button
                                            onClick={() =>
                                                handlePositionChange("All")
                                            }
                                            className={`px-2 py-1 rounded-full text-xs font-bold border transition-colors ${
                                                selectedPosition === "All"
                                                    ? "bg-ink text-sand-1 border-ink"
                                                    : "text-ink border-ink/40 hover:border-ink"
                                            }`}>
                                            All
                                        </button>
                                        <button
                                            onClick={goPrevPos}
                                            className='w-7 h-7 flex items-center justify-center rounded-full border border-ink/40 hover:border-ink transition-colors'>
                                            <ChevronLeft />
                                        </button>
                                        <span className='text-xs font-semibold text-ink min-w-[3.5rem] text-center leading-tight'>
                                            {selectionHierarchy.finalFormulas?.[
                                                selectedPosition
                                            ]?.name || selectedPosition}
                                        </span>
                                        <button
                                            onClick={goNextPos}
                                            className='w-7 h-7 flex items-center justify-center rounded-full border border-ink/40 hover:border-ink transition-colors'>
                                            <ChevronRight />
                                        </button>
                                    </div>
                                )}

                                {availableAlts.length > 1 && (
                                    <div className='flex items-center gap-1 ml-1'>
                                        <button
                                            onClick={goPrevAlt}
                                            className='w-7 h-7 flex items-center justify-center rounded-full border border-ink/40 hover:border-ink transition-colors'>
                                            <ChevronLeft />
                                        </button>
                                        <span className='text-xs font-semibold text-ink w-8 text-center'>
                                            {selectedAltShape + 1}/
                                            {availableAlts.length}
                                        </span>
                                        <button
                                            onClick={goNextAlt}
                                            className='w-7 h-7 flex items-center justify-center rounded-full border border-ink/40 hover:border-ink transition-colors'>
                                            <ChevronRight />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Action bar */}
                            <div className='shrink-0 border-t border-ink/20 bg-sand-1 px-4 py-3 flex items-center gap-3'>
                                <button
                                    onClick={() => setShuffleChecked(s => !s)}
                                    title='Shuffle'
                                    className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors ${
                                        shuffleChecked
                                            ? "bg-ink text-sand-1 border-ink"
                                            : "text-ink border-ink/40 hover:border-ink"
                                    }`}>
                                    <ShuffleIcon />
                                </button>

                                <NotesIntervalsToggle
                                    showIntervals={showIntervals}
                                    onToggle={setShowIntervals}
                                />

                                <button
                                    onClick={() => setIsRight(h => !h)}
                                    title={isRight ? "Right hand" : "Left hand"}
                                    className='w-9 h-9 flex items-center justify-center rounded-full border border-ink/40 text-ink text-sm font-bold hover:border-ink transition-colors'>
                                    {isRight ? "R" : "L"}
                                </button>

                                <div className='flex-1' />

                                <button
                                    onClick={handleGenerateNewRoot}
                                    className='px-6 py-2.5 bg-ink text-sand-1 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all'>
                                    New Chord
                                </button>
                            </div>
                        </div>

                        {/* Filters bottom sheet (mobile only) */}
                        {filtersOpen && (
                            <div className='sm:hidden fixed inset-0 z-50 flex flex-col justify-end'>
                                <div
                                    className='flex-1 bg-black/40'
                                    onClick={() => setFiltersOpen(false)}
                                />
                                <div className='bg-sand-1 rounded-t-2xl shadow-2xl px-4 pt-3 pb-8'>
                                    <div className='w-10 h-1 bg-ink/20 rounded-full mx-auto mb-4' />

                                    <div className='flex flex-col gap-5'>
                                        {/* Type */}
                                        <div>
                                            <p className='text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2'>
                                                Type
                                            </p>
                                            <div className='flex rounded-xl overflow-hidden border border-ink'>
                                                {selectionHierarchy.categories.map(
                                                    type => (
                                                        <button
                                                            key={type}
                                                            onClick={() =>
                                                                handleCategoryChange(
                                                                    type,
                                                                )
                                                            }
                                                            className={`flex-1 py-2.5 text-sm font-medium border-r border-ink last:border-r-0 transition-colors ${
                                                                selectedCategory ===
                                                                type
                                                                    ? "bg-sand-4 text-sand-1 font-semibold"
                                                                    : "bg-sand-1 text-ink hover:bg-sand-2"
                                                            }`}>
                                                            {type === "Sevenths"
                                                                ? "7ths"
                                                                : type}
                                                        </button>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        {/* Sub-levels */}
                                        {selectionHierarchy.subLevels.map(
                                            ({ levelName, options }) => {
                                                const isVoicing =
                                                    levelName ===
                                                    "Voicing Types";
                                                const isString =
                                                    levelName === "String Sets";
                                                const selectedValue =
                                                    getSubLevelValue(levelName);
                                                const setter =
                                                    getSetterForLevel(
                                                        levelName,
                                                    );
                                                const label = isVoicing
                                                    ? "Voicing"
                                                    : isString
                                                      ? "String Set"
                                                      : "Chord";
                                                return (
                                                    <div key={levelName}>
                                                        <p className='text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2'>
                                                            {label}
                                                        </p>
                                                        <div className='flex flex-wrap gap-2'>
                                                            {options.map(
                                                                option => (
                                                                    <button
                                                                        key={
                                                                            option
                                                                        }
                                                                        onClick={() =>
                                                                            setter(
                                                                                option,
                                                                            )
                                                                        }
                                                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                                                                            selectedValue ===
                                                                            option
                                                                                ? "bg-sand-4 text-sand-1 border-ink"
                                                                                : "text-ink border-ink/40 hover:border-ink"
                                                                        }`}>
                                                                        {isString &&
                                                                        option.includes(
                                                                            "String Set",
                                                                        )
                                                                            ? firstWord(
                                                                                  option,
                                                                              )
                                                                            : option}
                                                                    </button>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setFiltersOpen(false)}
                                        className='w-full mt-6 py-3 bg-ink text-sand-1 rounded-full font-bold text-sm hover:opacity-90 transition-opacity'>
                                        Done
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── DESKTOP layout (sm+) ─────────────────────────────────── */}
                        <div className='hidden sm:flex flex-col items-center gap-4 pt-4 pb-8 w-full'>
                            {/* Fretboard — full viewport width with padding */}
                            <div className='w-full px-4 xl:px-8'>
                                <FretboardHorizontal
                                    chordShape={displayShape}
                                    handedness={handedness}
                                    rootNote={currentRootNote}
                                    showIntervals={showIntervals}
                                />
                            </div>

                            {/* Controls — centered below fretboard */}
                            <div className='flex flex-col items-center gap-4 w-full max-w-4xl mx-auto px-4'>
                                {/* Category buttons */}
                                <div className='flex rounded overflow-hidden border border-ink'>
                                    {selectionHierarchy.categories.map(type => (
                                        <button
                                            key={type}
                                            onClick={() =>
                                                handleCategoryChange(type)
                                            }
                                            className={`px-4 py-1.5 text-sm font-medium border-r border-ink last:border-r-0 transition-colors ${
                                                selectedCategory === type
                                                    ? "bg-sand-4 text-sand-1 font-semibold"
                                                    : "bg-sand-1 text-ink hover:bg-sand-2"
                                            }`}>
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                {/* Sub-level buttons */}
                                {selectionHierarchy.subLevels.map(
                                    ({ levelName, options }) => {
                                        const selectedValue =
                                            getSubLevelValue(levelName);
                                        const setter =
                                            getSetterForLevel(levelName);
                                        return (
                                            <div
                                                key={levelName}
                                                className='flex rounded overflow-hidden border border-ink'>
                                                {options.map(option => (
                                                    <button
                                                        key={option}
                                                        onClick={() =>
                                                            setter(option)
                                                        }
                                                        className={`px-4 py-1.5 text-sm font-medium border-r border-ink last:border-r-0 transition-colors ${
                                                            selectedValue ===
                                                            option
                                                                ? "bg-sand-4 text-sand-1 font-semibold"
                                                                : "bg-sand-1 text-ink hover:bg-sand-2"
                                                        }`}>
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        );
                                    },
                                )}

                                {/* Position buttons */}
                                {selectionHierarchy.positions.length > 0 && (
                                    <div className='flex rounded overflow-hidden border border-ink'>
                                        <button
                                            onClick={() =>
                                                handlePositionChange("All")
                                            }
                                            className={`px-4 py-1.5 text-sm font-medium border-r border-ink transition-colors ${
                                                selectedPosition === "All"
                                                    ? "bg-sand-4 text-sand-1 font-semibold"
                                                    : "bg-sand-1 text-ink hover:bg-sand-2"
                                            }`}>
                                            All
                                        </button>
                                        {selectionHierarchy.positions.map(
                                            pos => (
                                                <button
                                                    key={pos}
                                                    onClick={() =>
                                                        handlePositionChange(
                                                            pos,
                                                        )
                                                    }
                                                    className={`px-4 py-1.5 text-sm font-medium border-r border-ink last:border-r-0 leading-snug transition-colors ${
                                                        selectedPosition === pos
                                                            ? "bg-sand-4 text-sand-1 font-semibold"
                                                            : "bg-sand-1 text-ink hover:bg-sand-2"
                                                    }`}>
                                                    {selectionHierarchy
                                                        .finalFormulas?.[pos]
                                                        ?.name || pos}
                                                </button>
                                            ),
                                        )}
                                    </div>
                                )}

                                {/* Alternate positions */}
                                {availableAlts.length > 1 && (
                                    <div className='flex flex-col items-center gap-1'>
                                        <span className='text-xs font-semibold text-ink'>
                                            Alternate Positions
                                        </span>
                                        <div className='flex items-center gap-2 border border-ink rounded overflow-hidden'>
                                            <button
                                                onClick={goPrevAlt}
                                                className='px-2 py-1.5 bg-sand-2 text-ink hover:bg-sand-3 transition-colors border-r border-ink'>
                                                <ChevronLeft />
                                            </button>
                                            <span className='px-3 text-sm font-bold text-ink'>
                                                {selectedAltShape + 1}/
                                                {availableAlts.length}
                                            </span>
                                            <button
                                                onClick={goNextAlt}
                                                className='px-2 py-1.5 bg-sand-2 text-ink hover:bg-sand-3 transition-colors border-l border-ink'>
                                                <ChevronRight />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Chord label + New Chord */}
                                <div className='flex flex-col items-center gap-3 bg-sand-4 border border-ink rounded-2xl px-10 py-4'>
                                    <span className='text-2xl font-semibold text-sand-1'>
                                        {chordLabel}
                                    </span>
                                    <button
                                        onClick={handleGenerateNewRoot}
                                        className='px-6 py-2 bg-sand-1 text-ink text-sm font-semibold rounded-full hover:opacity-90 transition-opacity'>
                                        New Chord
                                    </button>
                                </div>

                                {/* Shuffle + Handedness + Notes/Intervals */}
                                <div className='flex items-center gap-6'>
                                    <button
                                        onClick={() =>
                                            setShuffleChecked(s => !s)
                                        }
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                                            shuffleChecked
                                                ? "bg-ink text-sand-1 border-ink"
                                                : "bg-sand-1 text-ink border-ink hover:bg-sand-2"
                                        }`}>
                                        <ShuffleIcon />
                                        Shuffle
                                    </button>
                                    <button
                                        onClick={() => setIsRight(h => !h)}
                                        className='flex items-center gap-2 px-4 py-2 rounded-full border border-ink bg-sand-2 text-ink text-sm font-semibold hover:bg-sand-3 transition-colors'>
                                        {isRight ? "Right hand" : "Left hand"}
                                    </button>
                                    <NotesIntervalsToggle
                                        showIntervals={showIntervals}
                                        onToggle={setShowIntervals}
                                    />
                                </div>
                            </div>
                            {/* end controls wrapper */}
                        </div>
                    </>
                )}
            </main>
        </>
    );
}
