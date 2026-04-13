export type NotePosition = {
    string: number;
    fret: number;
    semitones: number | null;
    degree: number | null;
};

export type ShapeFormula = {
    name?: string;
    rootString: number;
    pattern: Array<{
        string: number;
        fretOffset: number;
        semitones: number;
        degree: number;
    }>;
    altShapes?: ShapeFormula[];
};

export const NOTES: string[][] = [
    ['A'],
    ['A#', 'Bb'],
    ['B'],
    ['C'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E'],
    ['F'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab'],
];

export function generateFretboardMap(
    tuning: string[],
    numFrets: number,
): string[][] {
    return tuning.map(openStringNote => {
        const startNoteIndex = NOTES.findIndex(pair =>
            pair.includes(openStringNote),
        );
        return Array.from({ length: numFrets + 1 }, (_, fret) => {
            const noteIndex = (startNoteIndex + fret) % NOTES.length;
            return NOTES[noteIndex].join('/');
        });
    });
}

export function generateAllVoicingsForShape(
    rootNote: string,
    shapeFormula: ShapeFormula,
    fretboardMap: string[][],
): NotePosition[][] {
    if (!shapeFormula || !fretboardMap) return [];

    const { rootString, pattern } = shapeFormula;
    const stringsCount = fretboardMap.length;
    const maxFret = fretboardMap[0]?.length ?? 0;

    if (
        typeof rootString !== 'number' ||
        rootString < 0 ||
        rootString >= stringsCount ||
        !Array.isArray(pattern) ||
        !Array.isArray(fretboardMap[rootString])
    ) {
        return [];
    }

    const stringNotes = fretboardMap[rootString];
    const allVoicings: NotePosition[][] = [];

    for (let rootFret = 0; rootFret < stringNotes.length; rootFret++) {
        const cell = stringNotes[rootFret];
        if (!String(cell).split('/').includes(rootNote)) continue;

        let valid = true;
        const newShape: NotePosition[] = pattern
            .map(note => {
                if (!note || note.fretOffset == null) {
                    return {
                        string: note?.string,
                        fret: null,
                        semitones: null,
                        degree: null,
                    } as unknown as NotePosition;
                }
                const finalFret = rootFret + note.fretOffset;
                if (finalFret < 0 || finalFret >= maxFret) {
                    valid = false;
                    return null;
                }
                return {
                    string: note.string,
                    fret: finalFret,
                    semitones: note.semitones,
                    degree: note.degree,
                };
            })
            .filter(Boolean) as NotePosition[];

        if (valid && newShape.some(n => n.fret != null)) {
            allVoicings.push(newShape);
        }
    }

    return allVoicings;
}

export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    let currentIndex = arr.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
        ];
    }
    return arr;
}
