import { spellInterval, spellNote } from "@/lib/ChordSpelling";
import * as React from "react";
import type { NotePosition } from "@/lib/fretboardMap";

type Props = {
    chordShape: NotePosition[];
    rootNote: string;
    showIntervals?: boolean;
    numFrets?: number;
    numStrings?: number;
    interactive?: boolean;
    onTogglePosition?: (pos: { string: number; fret: number }) => void;
    handedness?: "left" | "right";
};

const FretboardHorizontal = ({
    chordShape,
    rootNote,
    showIntervals = false,
    numFrets = 24,
    numStrings = 6,
    interactive = false,
    onTogglePosition,
    handedness = "right",
}: Props) => {
    const padX = 25;
    const padY = 25;
    const fretWidth = 50;
    const stringSpacing = 30;
    const diagramWidth = fretWidth * numFrets + padX * 2;
    const diagramHeight = stringSpacing * (numStrings - 1) + padY * 2;

    const singleDotFrets = [3, 5, 7, 9, 15, 17, 19, 21];
    const doubleDotFrets = [12, 24];
    const labelFrets = [1, 3, 5, 7, 9, 12, 15, 17, 19, 21, 24];

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const frets = chordShape
            .map(p => p.fret)
            .filter((f): f is number => typeof f === "number" && f >= 0);
        const container = containerRef.current;
        if (!container) return;
        if (frets.length === 0) {
            container.scrollTo({ left: 0, behavior: "smooth" });
            return;
        }

        // Root notes (semitones === 0) repeat every 12 frets. Each voicing's
        // notes lie within ±6 of its root, so windowing ±6 around the chosen
        // root fret isolates exactly one voicing.
        //
        // Default: lowest root fret (first octave position).
        // Exception: if the shape has open-string notes (fret 0), use the root
        // nearest to the current scroll centre so alt-shape navigation stays
        // near where the user is already looking.
        const rootFrets = chordShape
            .filter(p => p.semitones === 0)
            .map(p => p.fret)
            .filter((f): f is number => typeof f === "number" && f >= 0)
            .sort((a, b) => a - b);

        const hasOpenStrings = chordShape.some(p => p.fret === 0);

        const visibleCenterX = container.scrollLeft + container.clientWidth / 2;
        const currentCenterFret =
            (visibleCenterX - padX - fretWidth / 2) / fretWidth + 1;

        const anchorFret = (() => {
            if (rootFrets.length === 0)
                return frets.reduce((best, f) =>
                    Math.abs(f - currentCenterFret) <
                    Math.abs(best - currentCenterFret)
                        ? f
                        : best,
                );
            if (hasOpenStrings)
                return rootFrets.reduce((best, r) =>
                    Math.abs(r - currentCenterFret) <
                    Math.abs(best - currentCenterFret)
                        ? r
                        : best,
                );
            return rootFrets[0]; // lowest root — default
        })();

        const voicingFrets = frets.filter(f => Math.abs(f - anchorFret) <= 6);
        const minFret = Math.min(...voicingFrets);
        const maxFret = Math.max(...voicingFrets);

        const centerX =
            ((minFret + maxFret) / 2 - 1) * fretWidth + padX + fretWidth / 2;
        container.scrollTo({
            left: Math.max(0, centerX - container.clientWidth / 2),
            behavior: "smooth",
        });
    }, [chordShape, fretWidth, padX]);

    const yForString = React.useCallback(
        (s: number) =>
            (handedness === "right" ? s : numStrings - 1 - s) * stringSpacing +
            padY,
        [handedness, numStrings],
    );
    const xForFretLine = (i: number) => i * fretWidth + padX;
    const xForFretMark = (f: number) =>
        (f - 1) * fretWidth + padX + fretWidth / 2;
    const openX = padX - 13;

    return (
        <div
            ref={containerRef}
            className='w-full overflow-x-auto no-scrollbar'>
            <div style={{ width: "fit-content", margin: "0 auto" }}>
                <svg
                    style={{
                        display: "block",
                        height: diagramHeight,
                        WebkitTapHighlightColor: "transparent",
                        width: diagramWidth,
                    }}
                    viewBox={`0 0 ${diagramWidth} ${diagramHeight}`}>
                    {/* Frets */}
                    {[...Array(numFrets + 1)].map((_, i) => (
                        <line
                            key={`fret-${i}`}
                            x1={xForFretLine(i)}
                            y1={padY}
                            x2={xForFretLine(i)}
                            y2={diagramHeight - padY}
                            stroke='#1f2d3d'
                            strokeWidth={i === 0 ? 5 : 1.5}
                        />
                    ))}

                    {/* Strings */}
                    {[...Array(numStrings)].map((_, i) => (
                        <line
                            key={`string-${i}`}
                            x1={padX}
                            y1={yForString(i)}
                            x2={diagramWidth - padX}
                            y2={yForString(i)}
                            stroke='#1f2d3d'
                            strokeWidth={1.5}
                        />
                    ))}

                    {/* Single fret markers */}
                    {singleDotFrets.map(
                        fret =>
                            fret <= numFrets && (
                                <circle
                                    key={`marker-${fret}`}
                                    cx={xForFretMark(fret)}
                                    cy={diagramHeight / 1.99}
                                    r={6}
                                    fill='#d1d1cc'
                                />
                            ),
                    )}

                    {/* Double fret markers */}
                    {doubleDotFrets.map(
                        fret =>
                            fret <= numFrets && (
                                <g key={`marker-double-${fret}`}>
                                    <circle
                                        cx={xForFretMark(fret)}
                                        cy={diagramHeight / 3 + 4}
                                        r={6}
                                        fill='#d1d1cc'
                                    />
                                    <circle
                                        cx={xForFretMark(fret)}
                                        cy={(diagramHeight * 1.96) / 3}
                                        r={6}
                                        fill='#d1d1cc'
                                    />
                                </g>
                            ),
                    )}

                    {/* Fret number labels */}
                    {labelFrets.map(
                        fret =>
                            fret <= numFrets && (
                                <text
                                    key={`label-${fret}`}
                                    x={xForFretMark(fret)}
                                    y={diagramHeight - 6}
                                    textAnchor='middle'
                                    dominantBaseline='auto'
                                    fontSize={11}
                                    fontWeight='bold'
                                    fill='#1f2d3d'>
                                    {fret}
                                </text>
                            ),
                    )}

                    {/* Notes */}
                    {chordShape.map((pos, index) => {
                        const { string, fret, semitones, degree } = pos;
                        if (
                            fret === null ||
                            fret === undefined ||
                            fret < 0 ||
                            fret > numFrets
                        )
                            return null;
                        const isRoot = semitones === 0;
                        const label = showIntervals
                            ? spellInterval(rootNote, semitones!, degree!)
                            : spellNote(rootNote, semitones!, degree!);
                        const x = xForFretMark(fret);
                        const y = yForString(string);
                        const fontSize =
                            label.includes("bb") || label.includes("##")
                                ? 10
                                : 12;

                        if (fret === 0) {
                            return (
                                <g key={`note-${index}`}>
                                    <circle
                                        cx={openX}
                                        cy={y}
                                        r={10}
                                        fill='transparent'
                                        stroke={isRoot ? "#dc2626" : "#1f2d3d"}
                                        strokeWidth='2'
                                    />
                                    <text
                                        x={openX}
                                        y={y}
                                        textAnchor='middle'
                                        dominantBaseline='central'
                                        fontSize={fontSize}
                                        fontWeight={600}
                                        fill={isRoot ? "#dc2626" : "#1f2d3d"}>
                                        {label}
                                    </text>
                                </g>
                            );
                        }
                        return (
                            <g key={`note-${index}`}>
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={12}
                                    fill={isRoot ? "#dc2626" : "#1f2d3d"}
                                />
                                <text
                                    x={x}
                                    y={y}
                                    textAnchor='middle'
                                    dominantBaseline='central'
                                    fontSize={fontSize}
                                    fontWeight={600}
                                    fill='#f7f7f5'>
                                    {label}
                                </text>
                            </g>
                        );
                    })}

                    {/* Interactive hit layer */}
                    {interactive && (
                        <g aria-label='note-hit-layer'>
                            {[...Array(numStrings)].map((_, s) =>
                                [...Array(numFrets + 1)].map((_, f) => {
                                    const x = f === 0 ? openX : xForFretMark(f);
                                    const y = yForString(s);
                                    return (
                                        <circle
                                            key={`hit-${s}-${f}`}
                                            cx={x}
                                            cy={y}
                                            fill='transparent'
                                            onClick={() =>
                                                onTogglePosition?.({
                                                    string: s,
                                                    fret: f,
                                                })
                                            }
                                            r={14}
                                            role='button'
                                            style={{ cursor: "pointer" }}
                                        />
                                    );
                                }),
                            )}
                        </g>
                    )}
                </svg>
            </div>
        </div>
    );
};

export default FretboardHorizontal;
