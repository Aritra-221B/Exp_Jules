import React from 'react';

interface PianoProps {
  pressedKeys?: string[];
  onTouchStart?: (note: string) => void;
  onTouchEnd?: (note: string) => void;
}

const Piano: React.FC<PianoProps> = ({ pressedKeys = [], onTouchStart, onTouchEnd }) => {
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
    <div className="relative flex justify-center w-full max-w-4xl mx-auto shadow-2xl rounded-b-lg" role="application">
      <div className="flex w-full">
        {/* White Keys */}
        {whiteKeys.map((note, index) => {
            const isPressed = pressedKeys.includes(note);
            return (
                <div
                    key={`white-${note}-${index}`}
                    role="button"
                    aria-label={`Piano key ${note}`}
                    aria-pressed={isPressed}
                    tabIndex={0}
                    className={`h-48 sm:h-56 md:h-64 border-2 border-black rounded-b-lg flex items-end justify-center pb-2 sm:pb-4 transition-all duration-75 ${
                        isPressed ? 'bg-gray-200 transform-gpu scale-y-95' : 'bg-white'
                    }`}
                    style={{ width: `${whiteKeyWidth}%`, background: isPressed ? '#e5e5e5' : 'linear-gradient(to bottom, #fff 0%, #eee 100%)' }}
                    onMouseDown={() => onTouchStart?.(note)}
                    onMouseUp={() => onTouchEnd?.(note)}
                    onTouchStart={() => onTouchStart?.(note)}
                    onTouchEnd={() => onTouchEnd?.(note)}
                >
                    {/* The note name is removed from here */}
                </div>
            )
        })}
      </div>

      {/* Black Keys */}
      {blackKeys.map(({ note, position }) => {
        const isPressed = pressedKeys.includes(note);
        return (
            <div
                key={`black-${note}`}
                role="button"
                aria-label={`Piano key ${note}`}
                aria-pressed={isPressed}
                tabIndex={0}
                className={`absolute top-0 h-28 sm:h-32 md:h-40 w-[${whiteKeyWidth * 0.6}%] rounded-b-md shadow-xl flex items-end justify-center pb-1 sm:pb-2 transition-all duration-75 z-10 ${
                    isPressed ? 'bg-gray-700 transform-gpu scale-y-95' : 'bg-black'
                }`}
                style={{ left: `${position * whiteKeyWidth - (whiteKeyWidth * 0.3)}%`, background: isPressed ? '#333' : 'linear-gradient(to bottom, #444 0%, #222 100%)' }}
                onMouseDown={() => onTouchStart?.(note)}
                onMouseUp={() => onTouchEnd?.(note)}
                onTouchStart={() => onTouchStart?.(note)}
                onTouchEnd={() => onTouchEnd?.(note)}
            >
                {/* The note name is removed from here */}
            </div>
      )})}
    </div>
  );
};

export default Piano;
