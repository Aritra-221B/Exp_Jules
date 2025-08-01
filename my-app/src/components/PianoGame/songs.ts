export interface Song {
  title: string;
  notes: { note: string; time: number; duration: number }[];
}

export const songs: Song[] = [
  {
    title: "Twinkle, Twinkle, Little Star",
    notes: [
        { note: 'C', time: 0, duration: 0.5 },
        { note: 'C', time: 0.5, duration: 0.5 },
        { note: 'G', time: 1, duration: 0.5 },
        { note: 'G', time: 1.5, duration: 0.5 },
        { note: 'A', time: 2, duration: 0.5 },
        { note: 'A', time: 2.5, duration: 0.5 },
        { note: 'G', time: 3, duration: 1 },
        { note: 'F', time: 4, duration: 0.5 },
        { note: 'F', time: 4.5, duration: 0.5 },
        { note: 'E', time: 5, duration: 0.5 },
        { note: 'E', time: 5.5, duration: 0.5 },
        { note: 'D', time: 6, duration: 0.5 },
        { note: 'D', time: 6.5, duration: 0.5 },
        { note: 'C', time: 7, duration: 1 },
    ],
  },
  {
    title: "Mary Had a Little Lamb",
    notes: [
        { note: 'E', time: 0, duration: 0.5 },
        { note: 'D', time: 0.5, duration: 0.5 },
        { note: 'C', time: 1, duration: 0.5 },
        { note: 'D', time: 1.5, duration: 0.5 },
        { note: 'E', time: 2, duration: 0.5 },
        { note: 'E', time: 2.5, duration: 0.5 },
        { note: 'E', time: 3, duration: 1 },
        { note: 'D', time: 4, duration: 0.5 },
        { note: 'D', time: 4.5, duration: 0.5 },
        { note: 'D', time: 5, duration: 1 },
        { note: 'E', time: 6, duration: 0.5 },
        { note: 'G', time: 6.5, duration: 0.5 },
        { note: 'G', time: 7, duration: 1 },
    ]
  }
];
