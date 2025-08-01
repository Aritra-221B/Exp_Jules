import React from 'react';

interface NoteProps {
  note: string;
  position: {
    x: number;
    y: number;
  };
}

const Note: React.FC<NoteProps> = ({ note, position }) => {
  return (
    <div
      className="absolute bg-blue-500 rounded-md"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '60px', // same as white key width
        height: '20px',
      }}
    >
      <span className="text-white font-bold text-center block w-full">{note}</span>
    </div>
  );
};

export default Note;
