import React from 'react';
import { songs, Song } from './songs';

interface SongSelectionProps {
  onSelectSong: (song: Song) => void;
  onFreestyle: () => void;
}

const SongSelection: React.FC<SongSelectionProps> = ({ onSelectSong, onFreestyle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-5xl font-bold mb-12">Select a Song</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {songs.map((song) => (
          <button
            key={song.title}
            onClick={() => onSelectSong(song)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105"
          >
            {song.title}
          </button>
        ))}
      </div>
      <div className="mt-12">
        <button
            onClick={onFreestyle}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105"
        >
            Freestyle
        </button>
      </div>
    </div>
  );
};

export default SongSelection;
