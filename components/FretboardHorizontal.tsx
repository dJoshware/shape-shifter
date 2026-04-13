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
        <svg
            style={{
                height: "auto",
                WebkitTapHighlightColor: "transparent",
                width: "100%",
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
                    stroke='#39434b'
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
                    stroke='#39434b'
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
                            fill='#A59D84'
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
                                fill='#A59D84'
                            />
                            <circle
                                cx={xForFretMark(fret)}
                                cy={(diagramHeight * 1.96) / 3}
                                r={6}
                                fill='#A59D84'
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
                            y={diagramHeight - 8}
                            textAnchor='middle'
                            dominantBaseline='auto'
                            fontSize={10}
                            fill='#39434b'>
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
                    label.includes("bb") || label.includes("##") ? 10 : 12;

                if (fret === 0) {
                    return (
                        <g key={`note-${index}`}>
                            <circle
                                cx={openX}
                                cy={y}
                                r={10}
                                fill='transparent'
                                stroke={isRoot ? "#D32F2F" : "#39434b"}
                                strokeWidth='2'
                            />
                            <text
                                x={openX}
                                y={y}
                                textAnchor='middle'
                                dominantBaseline='central'
                                fontSize={fontSize}
                                fontWeight={600}
                                fill={isRoot ? "#D32F2F" : "#39434b"}>
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
                            fill={isRoot ? "#D32F2F" : "#39434b"}
                        />
                        <text
                            x={x}
                            y={y}
                            textAnchor='middle'
                            dominantBaseline='central'
                            fontSize={fontSize}
                            fontWeight={600}
                            fill='#ECEBDE'>
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
    );
};

export default FretboardHorizontal;
