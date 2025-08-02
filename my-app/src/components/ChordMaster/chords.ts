export interface Chord {
  name: string;
  notes: string[];
  level: number;
  guitarVoicing?: { string: number; fret: number }[];
}

export const chords: Chord[] = [
  // Level 1: Major and Minor Triads
  {
    name: 'C Major',
    notes: ['C4', 'E4', 'G4'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 0 },
        { string: 2, fret: 1 },
        { string: 3, fret: 0 },
        { string: 4, fret: 2 },
        { string: 5, fret: 3 },
    ]
  },
  {
    name: 'C Minor',
    notes: ['C4', 'Eb4', 'G4'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 3 },
        { string: 2, fret: 4 },
        { string: 3, fret: 5 },
        { string: 4, fret: 5 },
        { string: 5, fret: 3 },
    ]
  },
  {
    name: 'D Major',
    notes: ['D4', 'Gb4', 'A4'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 2 },
        { string: 2, fret: 3 },
        { string: 3, fret: 2 },
        { string: 4, fret: 0 },
    ]
  },
  {
    name: 'D Minor',
    notes: ['D4', 'F4', 'A4'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 1 },
        { string: 2, fret: 2 },
        { string: 3, fret: 2 },
        { string: 4, fret: 0 },
    ]
  },
  {
    name: 'E Major',
    notes: ['E4', 'Ab4', 'B4'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 0 },
        { string: 1, fret: 0 },
        { string: 2, fret: 1 },
        { string: 3, fret: 2 },
        { string: 4, fret: 2 },
        { string: 5, fret: 0 },
    ]
  },
  {
    name: 'E Minor',
    notes: ['E4', 'G4', 'B4'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 0 },
        { string: 1, fret: 0 },
        { string: 2, fret: 0 },
        { string: 3, fret: 2 },
        { string: 4, fret: 2 },
        { string: 5, fret: 0 },
    ]
  },
  {
    name: 'F Major',
    notes: ['F4', 'A4', 'C5'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 1 },
        { string: 1, fret: 1 },
        { string: 2, fret: 2 },
        { string: 3, fret: 3 },
        { string: 4, fret: 3 },
        { string: 5, fret: 1 },
    ]
  },
  {
    name: 'F Minor',
    notes: ['F4', 'Ab4', 'C5'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 1 },
        { string: 1, fret: 1 },
        { string: 2, fret: 1 },
        { string: 3, fret: 3 },
        { string: 4, fret: 3 },
        { string: 5, fret: 1 },
    ]
  },
  {
    name: 'G Major',
    notes: ['G4', 'B4', 'D5'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 3 },
        { string: 1, fret: 0 },
        { string: 2, fret: 0 },
        { string: 3, fret: 0 },
        { string: 4, fret: 2 },
        { string: 5, fret: 3 },
    ]
  },
  {
    name: 'G Minor',
    notes: ['G4', 'Bb4', 'D5'],
    level: 1,
    guitarVoicing: [
        { string: 0, fret: 3 },
        { string: 1, fret: 3 },
        { string: 2, fret: 3 },
        { string: 3, fret: 5 },
        { string: 4, fret: 5 },
        { string: 5, fret: 3 },
    ]
  },
  {
    name: 'A Major',
    notes: ['A4', 'Db5', 'E5'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 2 },
        { string: 2, fret: 2 },
        { string: 3, fret: 2 },
        { string: 4, fret: 0 },
    ]
  },
  {
    name: 'A Minor',
    notes: ['A4', 'C5', 'E5'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 1 },
        { string: 2, fret: 2 },
        { string: 3, fret: 2 },
        { string: 4, fret: 0 },
    ]
  },
  {
    name: 'B Major',
    notes: ['B4', 'Eb5', 'Gb5'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 2 },
        { string: 2, fret: 4 },
        { string: 3, fret: 4 },
        { string: 4, fret: 4 },
        { string: 5, fret: 2 },
    ]
  },
  {
    name: 'B Minor',
    notes: ['B4', 'D5', 'Gb5'],
    level: 1,
    guitarVoicing: [
        { string: 1, fret: 2 },
        { string: 2, fret: 3 },
        { string: 3, fret: 4 },
        { string: 4, fret: 4 },
        { string: 5, fret: 2 },
    ]
  },
];
