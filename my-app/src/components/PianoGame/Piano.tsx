import React from 'react';

interface PianoProps {
  pressedKeys?: string[];
}

const Piano: React.FC<PianoProps> = ({ pressedKeys = [] }) => {
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = [
    { note: 'Db', left: 3.5 },
    { note: 'Eb', left: 7.5 },
    { note: 'Gb', left: 15.5 },
    { note: 'Ab', left: 19.5 },
    { note: 'Bb', left: 23.5 },
    { note: 'Db', left: 31.5 },
    { note: 'Eb', left: 35.5 },
    { note: 'Gb', left: 43.5 },
    { note: 'Ab', left: 47.5 },
    { note: 'Bb', left: 51.5 },
  ];

  return (
    <div className="relative flex justify-center">
      {/* White Keys */}
      {whiteKeys.map((note, index) => {
        const isPressed = pressedKeys.includes(note);
        return (
            <div
            key={`white-${note}-${index}`}
            className={`w-16 h-64 border-2 border-gray-400 rounded-b-lg shadow-lg flex items-end justify-center pb-4 transition-colors duration-100 ${
                isPressed ? 'bg-gray-300' : 'bg-white'
            }`}
            >
            <span className="font-bold text-lg">{note}</span>
            </div>
        )
        })}

      {/* Black Keys */}
      {blackKeys.map(({ note, left }) => {
        const isPressed = pressedKeys.includes(note);
        return (
        <div
          key={`black-${note}`}
          className={`absolute top-0 w-10 h-40 rounded-b-md shadow-xl flex items-end justify-center pb-2 transition-colors duration-100 ${
            isPressed ? 'bg-gray-600' : 'bg-black'
          }`}
          style={{ left: `${left}rem` }}
        >
          <span className="font-bold text-white text-sm">{note}</span>
        </div>
      )})}
    </div>
  );
};

export default Piano;
