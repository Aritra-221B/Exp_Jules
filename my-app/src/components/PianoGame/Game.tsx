import React, { useState, useEffect, useRef } from 'react';
import Piano from './Piano';
import Note from './Note';
import Score from './Score';
import SongSelection from './SongSelection';
import GameOver from './GameOver';
import { Song } from './songs';

const noteToColumn: { [key: string]: number } = {
  'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6,
};

const keyToNote: { [key: string]: string } = {
  'a': 'C', 's': 'D', 'd': 'E', 'f': 'F', 'g': 'G', 'h': 'A', 'j': 'B',
};

const HIT_ZONE_TOP = 500;
const HIT_ZONE_BOTTOM = 600;

type GameState = 'song-selection' | 'playing' | 'game-over' | 'freestyle';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('song-selection');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [activeNotes, setActiveNotes] = useState<{ note: string; startTime: number; x: number; y: number; id: number }[]>([]);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const gameTimeRef = useRef(0);
  const startTimeRef = useRef(0);
  const lastNoteIndexRef = useRef(0);

  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameState !== 'playing' || !selectedSong) return;

    startTimeRef.current = performance.now();
    const gameLoop = (currentTime: number) => {
        const elapsedTime = (currentTime - startTimeRef.current) / 1000;
        gameTimeRef.current = elapsedTime;

        let newNotes: { note: string; startTime: number; x: number; y: number; id: number }[] = [];
        if (lastNoteIndexRef.current < selectedSong.notes.length && selectedSong.notes[lastNoteIndexRef.current].time <= gameTimeRef.current) {
            const noteData = selectedSong.notes[lastNoteIndexRef.current];
            const column = noteToColumn[noteData.note];
            if (column !== undefined) {
                newNotes.push({
                    note: noteData.note,
                    startTime: gameTimeRef.current,
                    x: column * 64,
                    y: 0,
                    id: lastNoteIndexRef.current
                });
            }
            lastNoteIndexRef.current++;
        }

        setActiveNotes(prevNotes => {
            const updatedNotes = prevNotes.map(note => ({
                ...note,
                y: (gameTimeRef.current - note.startTime) * 100,
            }));

            const filteredNotes = updatedNotes.filter(note => note.y < (gameContainerRef.current?.clientHeight || 800));

            if (newNotes.length > 0) {
                return [...filteredNotes, ...newNotes];
            }
            return filteredNotes;
        });

        if (lastNoteIndexRef.current >= selectedSong.notes.length && activeNotes.length === 0) {
            setGameState('game-over');
        }

        requestAnimationFrame(gameLoop);
    };

    const animationFrameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, selectedSong, activeNotes.length]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const note = keyToNote[event.key];
    if (note) {
        setPressedKeys(prev => [...prev, note]);
        if (gameState === 'playing') {
            const hitNote = activeNotes.find(activeNote =>
                activeNote.note === note &&
                activeNote.y > HIT_ZONE_TOP &&
                activeNote.y < HIT_ZONE_BOTTOM
            );

            if (hitNote) {
                setActiveNotes(prev => prev.filter(n => n.id !== hitNote.id));
                setScore(prev => prev + 10 * combo);
                setCombo(prev => prev + 1);
            } else {
                setCombo(1);
            }
        }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const note = keyToNote[event.key];
    if (note) {
        setPressedKeys(prev => prev.filter(n => n !== note));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeNotes, combo, gameState]);

  const resetGameState = () => {
    setGameState('song-selection');
    setSelectedSong(null);
    setActiveNotes([]);
    setScore(0);
    setCombo(1);
    lastNoteIndexRef.current = 0;
  };

  const handleSelectSong = (song: Song) => {
    setSelectedSong(song);
    setGameState('playing');
  };

  const handleFreestyle = () => {
    setGameState('freestyle');
  }

  if (gameState === 'song-selection') {
    return <SongSelection onSelectSong={handleSelectSong} onFreestyle={handleFreestyle} />;
  }

  if (gameState === 'game-over') {
    return <GameOver score={score} onPlayAgain={resetGameState} />;
  }

  if (gameState === 'freestyle') {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800" tabIndex={0}>
            <button onClick={resetGameState} className="absolute top-8 left-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to Menu
            </button>
            <h1 className="text-4xl font-bold text-white mb-8">Freestyle</h1>
            <Piano pressedKeys={pressedKeys} />
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800" tabIndex={0}>
      <div className="absolute top-8 left-8">
          <Score score={score} combo={combo} />
      </div>
      <h1 className="text-4xl font-bold text-white mb-8">{selectedSong?.title}</h1>
      <div ref={gameContainerRef} className="relative w-[448px] h-[600px] bg-gray-700 border-2 border-gray-600 overflow-hidden">
          <div
              className="absolute w-full bg-gray-500/20 z-0"
              style={{ top: `${HIT_ZONE_TOP}px`, height: `${HIT_ZONE_BOTTOM - HIT_ZONE_TOP}px` }}
          ></div>
        {activeNotes.map((note) => (
          <Note key={note.id} note={note.note} position={{ x: note.x, y: note.y }} />
        ))}
      </div>
      <Piano pressedKeys={pressedKeys} />
    </div>
  );
};

export default Game;
