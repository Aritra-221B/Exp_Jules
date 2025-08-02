import React from 'react';

interface PianoProps {
  pressedKeys?: string[];
  onTouchStart?: (note: string) => void;
  onTouchEnd?: (note: string) => void;
}

const Piano: React.FC<PianoProps> = ({ pressedKeys = [], onTouchStart, onTouchEnd }) => {
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = [
    { note: 'Db', position: 1 },
    { note: 'Eb', position: 2 },
    { note: 'Gb', position: 4 },
    { note: 'Ab', position: 5 },
    { note: 'Bb', position: 6 },
    { note: 'Db', position: 8 },
    { note: 'Eb', position: 9 },
    { note: 'Gb', position: 11 },
    { note: 'Ab', position: 12 },
    { note: 'Bb', position: 13 },
  ];

  const whiteKeyWidth = 100 / whiteKeys.length;

  return (
    <div className="relative flex justify-center w-full max-w-4xl mx-auto">
      {/* White Keys */}
      {whiteKeys.map((note, index) => {
        const isPressed = pressedKeys.includes(note);
        return (
            <div
                key={`white-${note}-${index}`}
                className={`h-48 sm:h-56 md:h-64 border-2 border-gray-400 rounded-b-lg shadow-lg flex items-end justify-center pb-2 sm:pb-4 transition-colors duration-100 ${
                    isPressed ? 'bg-gray-300' : 'bg-white'
                }`}
                style={{ width: `${whiteKeyWidth}%` }}
                onTouchStart={() => onTouchStart?.(note)}
                onTouchEnd={() => onTouchEnd?.(note)}
            >
                <span className="font-bold text-xs sm:text-base md:text-lg">{note}</span>
            </div>
        )
      })}

      {/* Black Keys */}
      {blackKeys.map(({ note, position }) => {
        const isPressed = pressedKeys.includes(note);
        return (
            <div
                key={`black-${note}`}
                className={`absolute top-0 h-28 sm:h-32 md:h-40 w-[${whiteKeyWidth * 0.6}%] rounded-b-md shadow-xl flex items-end justify-center pb-1 sm:pb-2 transition-colors duration-100 ${
                    isPressed ? 'bg-gray-600' : 'bg-black'
                }`}
                style={{ left: `${position * whiteKeyWidth - (whiteKeyWidth * 0.3)}%` }}
                onTouchStart={() => onTouchStart?.(note)}
                onTouchEnd={() => onTouchEnd?.(note)}
            >
                <span className="font-bold text-white text-[8px] sm:text-xs md:text-sm">{note}</span>
            </div>
      )})}
    </div>
  );
};

export default Piano;
