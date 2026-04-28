// 0: 1st string
// 1: 2nd string
// 2: 3rd string
// 3: 4th string
// 4: 5th string
// 5: 6th string

export const BEGINNER_CHORD_SHAPES = {
    CAGED: {
        levelName: 'Positions',
        options: {
            C: {
                name: 'C Shape',
                rootString: 4,
                pattern: [
                    { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                    { string: 1, fretOffset: -2, semitones: 0, degree: 1 },
                    { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                    { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                    // 6th-string not played
                ],
            },
            A: {
                name: 'A Shape',
                rootString: 4,
                pattern: [
                    { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                    { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                    { string: 2, fretOffset: 2, semitones: 0, degree: 1 },
                    { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                    // 6th-string not played
                ],
            },
            G: {
                name: 'G Shape',
                rootString: 5,
                pattern: [
                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                    { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                    { string: 2, fretOffset: -3, semitones: 0, degree: 1 },
                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                    { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                ],
            },
            E: {
                name: 'E Shape',
                rootString: 5,
                pattern: [
                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                    { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                    { string: 3, fretOffset: 2, semitones: 0, degree: 1 },
                    { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                ],
            },
            D: {
                name: 'D Shape',
                rootString: 3,
                pattern: [
                    { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                    { string: 1, fretOffset: 3, semitones: 0, degree: 1 },
                    { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                    // 5th-string not played
                    // 6th-string not played
                ],
            },
        },
    },
    Triads: {
        levelName: 'String Sets',
        options: {
            '1st String Set': {
                levelName: 'Chord Qualities',
                options: {
                    Maj: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                    { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 7, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: -8, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Min: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                    { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 6, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: -8, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Dim: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: -3, semitones: 6, degree: 5 },
                                    { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 6, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                    { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -2, semitones: 6, degree: 5 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                            },
                        },
                    },
                    Aug: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: -1, semitones: 8, degree: 5 },
                                    { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 7, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 4, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                    { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: 0, semitones: 8, degree: 5 },
                                    // 4th-string not played
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: -7, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            '2nd String Set': {
                levelName: 'Chord Qualities',
                options: {
                    Maj: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                    { string: 2, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 7, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                    { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 3, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Min: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                    { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 6, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                    { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Dim: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -3, semitones: 6, degree: 5 },
                                    { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 6, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 6, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: -2, semitones: 6, degree: 5 },
                                    { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Aug: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: -1, semitones: 8, degree: 5 },
                                    { string: 2, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 7, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 2, fretOffset: 0, semitones: 8, degree: 5 },
                                    { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 8, degree: 5 },
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 4, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 1, semitones: 8, degree: 5 },
                                    // 5th-string not played
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -7, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            '3rd String Set': {
                levelName: 'Chord Qualities',
                options: {
                    Maj: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                    { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 7, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Min: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                    { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -7, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: -7, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 1, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 5, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 6, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Dim: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -4, semitones: 6, degree: 5 },
                                    { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 4, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 4, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                    { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 4, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Aug: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -2, semitones: 8, degree: 5 },
                                    { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -6, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 6, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: 1, semitones: 8, degree: 5 },
                                    { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 0, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 4, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1s-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 0, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    { string: 2, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 1, semitones: 8, degree: 5 },
                                    // 6th-string not played
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            '4th String Set': {
                levelName: 'Chord Qualities',
                options: {
                    Maj: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 5,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                    { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 4th-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -7, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -5, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -4, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -7, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -7, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Min: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 5,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                    { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 4th-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                    { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -3, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -7, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 4, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -7, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -4, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -7, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -7, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -5, semitones: 7, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Dim: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 5,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                    { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 4th-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                    { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 4, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -4, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -2, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 5, fretOffset: -1, semitones: 6, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -6, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -3, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -3, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -3, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -3, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -6, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -6, semitones: 6, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    Aug: {
                        levelName: 'Positions',
                        options: {
                            Root: {
                                name: 'Root',
                                rootString: 5,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                    { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: -4, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 2rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 4th-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 4, fretOffset: 1, semitones: 8, degree: 5 },
                                    { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 4, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -2, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: -6, semitones: 8, degree: 5 },
                                            { string: 5, fretOffset: -5, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -6, semitones: 8, degree: 5 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: -2, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 0, semitones: 8, degree: 5 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 6, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 8, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -5, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 8, degree: 5 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    // 1st-string not played
                                    // 2nd-string not played
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                    { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 5, fretOffset: 1, semitones: 8, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 6, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: -5, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 6, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 3, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 6, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 3, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -3, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -6, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            { string: 3, fretOffset: -6, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -4, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -4, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            // 5th-string not played
                                            { string: 5, fretOffset: -4, semitones: 8, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -4, semitones: 8, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                },
            },
        },
    },
};
