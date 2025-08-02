import React from 'react';

interface KeyboardProps {
  highlightedNotes: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({ highlightedNotes }) => {
  const whiteKeys = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'];
  const blackKeys = [
    { note: 'Db4', position: 1 },
    { note: 'Eb4', position: 2 },
    { note: 'Gb4', position: 4 },
    { note: 'Ab4', position: 5 },
    { note: 'Bb4', position: 6 },
    { note: 'Db5', position: 8 },
    { note: 'Eb5', position: 9 },
    { note: 'Gb5', position: 11 },
    { note: 'Ab5', position: 12 },
    { note: 'Bb5', position: 13 },
  ];

  const whiteKeyWidth = 100 / whiteKeys.length;

  return (
    <div className="relative flex justify-center w-full max-w-4xl mx-auto shadow-2xl rounded-b-lg">
      <div className="flex w-full">
        {/* White Keys */}
        {whiteKeys.map((note, index) => {
            const isHighlighted = highlightedNotes.includes(note);
            return (
                <div
                    key={`white-${note}-${index}`}
                    className={`h-48 sm:h-56 md:h-64 border-2 border-black rounded-b-lg transition-all duration-75 ${
                        isHighlighted ? 'bg-yellow-400' : 'bg-white'
                    }`}
                    style={{ width: `${whiteKeyWidth}%`, background: isHighlighted ? '#facc15' : 'linear-gradient(to bottom, #fff 0%, #eee 100%)' }}
                >
                </div>
            )
        })}
      </div>

      {/* Black Keys */}
      {blackKeys.map(({ note, position }) => {
        const isHighlighted = highlightedNotes.includes(note);
        return (
            <div
                key={`black-${note}`}
                className={`absolute top-0 h-28 sm:h-32 md:h-40 w-[${whiteKeyWidth * 0.6}%] rounded-b-md shadow-xl transition-all duration-75 z-10 ${
                    isHighlighted ? 'bg-yellow-500' : 'bg-black'
                }`}
                style={{ left: `${position * whiteKeyWidth - (whiteKeyWidth * 0.3)}%`, background: isHighlighted ? '#eab308' : 'linear-gradient(to bottom, #444 0%, #222 100%)' }}
            >
            </div>
      )})}
    </div>
  );
};

export default Keyboard;
