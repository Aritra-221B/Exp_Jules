export interface Song {
  title: string;
  notes: { note: string; time: number; duration: number }[];
}

export const songs: Song[] = [
  {
    title: "Twinkle, Twinkle, Little Star",
    notes: [
        { note: 'C4', time: 0, duration: 0.5 },
        { note: 'C4', time: 0.5, duration: 0.5 },
        { note: 'G4', time: 1, duration: 0.5 },
        { note: 'G4', time: 1.5, duration: 0.5 },
        { note: 'A4', time: 2, duration: 0.5 },
        { note: 'A4', time: 2.5, duration: 0.5 },
        { note: 'G4', time: 3, duration: 1 },
        { note: 'F4', time: 4, duration: 0.5 },
        { note: 'F4', time: 4.5, duration: 0.5 },
        { note: 'E4', time: 5, duration: 0.5 },
        { note: 'E4', time: 5.5, duration: 0.5 },
        { note: 'D4', time: 6, duration: 0.5 },
        { note: 'D4', time: 6.5, duration: 0.5 },
        { note: 'C4', time: 7, duration: 1 },
    ],
  },
  {
    title: "Mary Had a Little Lamb",
    notes: [
        { note: 'E4', time: 0, duration: 0.5 },
        { note: 'D4', time: 0.5, duration: 0.5 },
        { note: 'C4', time: 1, duration: 0.5 },
        { note: 'D4', time: 1.5, duration: 0.5 },
        { note: 'E4', time: 2, duration: 0.5 },
        { note: 'E4', time: 2.5, duration: 0.5 },
        { note: 'E4', time: 3, duration: 1 },
        { note: 'D4', time: 4, duration: 0.5 },
        { note: 'D4', time: 4.5, duration: 0.5 },
        { note: 'D4', time: 5, duration: 1 },
        { note: 'E4', time: 6, duration: 0.5 },
        { note: 'G4', time: 6.5, duration: 0.5 },
        { note: 'G4', time: 7, duration: 1 },
    ]
  }
];
