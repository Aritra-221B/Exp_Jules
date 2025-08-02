import React from 'react';

interface FretboardProps {
  highlightedNotes: { string: number; fret: number }[];
}

const Fretboard: React.FC<FretboardProps> = ({ highlightedNotes }) => {
  const numStrings = 6;
  const numFrets = 12;

  return (
    <div className="relative bg-yellow-800 p-4 rounded-lg shadow-lg">
      {/* Strings */}
      {Array.from({ length: numStrings }).map((_, stringIndex) => (
        <div
          key={stringIndex}
          className="h-1 bg-gray-400 my-4"
        />
      ))}

      {/* Frets */}
      {Array.from({ length: numFrets + 1 }).map((_, fretIndex) => (
        <div
          key={fretIndex}
          className="absolute top-0 bottom-0 w-1 bg-gray-600"
          style={{ left: `${(fretIndex / numFrets) * 100}%` }}
        />
      ))}

      {/* Notes */}
      {highlightedNotes.map(({ string, fret }, index) => (
        <div
          key={index}
          className="absolute w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
          style={{
            top: `${(string / (numStrings - 1)) * 100}%`,
            left: `${((fret - 0.5) / numFrets) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {fret}
        </div>
      ))}
    </div>
  );
};

export default Fretboard;
