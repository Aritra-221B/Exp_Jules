import React, { useState, useEffect, useRef } from 'react';
import Piano from './Piano';
import Note from './Note';
import Score from './Score';
import SongSelection from './SongSelection';
import GameOver from './GameOver';
import Particle from './Particle';
import { Song } from './songs';
import { getHighScores, setHighScore } from './storage';

const noteToColumn: { [key: string]: number } = {
  'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6,
};

const keyToNote: { [key: string]: string } = {
  // White keys
  'a': 'C', 's': 'D', 'd': 'E', 'f': 'F', 'g': 'G', 'h': 'A', 'j': 'B',
  // Black keys
  'w': 'Db', 'e': 'Eb', 't': 'Gb', 'y': 'Ab', 'u': 'Bb',
};

const HIT_ZONE_CENTER = 550;
const PERFECT_WINDOW = 25;
const GOOD_WINDOW = 50;
const OK_WINDOW = 75;

type GameState = 'song-selection' | 'playing' | 'game-over' | 'freestyle';
type Accuracy = 'Perfect' | 'Good' | 'OK' | 'Miss';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('song-selection');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [activeNotes, setActiveNotes] = useState<{ note: string; startTime: number; x: number; y: number; id: number }[]>([]);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [accuracy, setAccuracy] = useState<Accuracy | null>(null);
  const [highScores, setHighScores] = useState<{ [songTitle: string]: number }>({});
  const [particles, setParticles] = useState<{ x: number; y: number; id: number }[]>([]);
  const gameTimeRef = useRef(0);
  const startTimeRef = useRef(0);
  const lastNoteIndexRef = useRef(0);

  const gameContainerRef = useRef<HTMLDivElement>(null);
  const pianoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHighScores(getHighScores());
  }, []);

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
            const pianoWidth = pianoContainerRef.current?.clientWidth || 0;
            if (column !== undefined && pianoWidth > 0) {
                newNotes.push({
                    note: noteData.note,
                    startTime: gameTimeRef.current,
                    x: (pianoWidth / 14) * column,
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
            if (score > (highScores[selectedSong.title] || 0)) {
                setHighScore(selectedSong.title, score);
                setHighScores(getHighScores());
            }
            setGameState('game-over');
        }

        requestAnimationFrame(gameLoop);
    };

    const animationFrameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, selectedSong, activeNotes.length, score, highScores]);

  const createParticles = (x: number, y: number) => {
    const newParticles = [];
    for (let i = 0; i < 10; i++) {
        newParticles.push({ x, y, id: Math.random() });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  const handleNotePress = (note: string) => {
    setPressedKeys(prev => [...prev, note]);
    if (gameState === 'playing') {
        const hitNote = activeNotes.find(activeNote => {
            const distance = Math.abs(activeNote.y - HIT_ZONE_CENTER);
            return activeNote.note === note && distance < OK_WINDOW;
        });

        if (hitNote) {
            const distance = Math.abs(hitNote.y - HIT_ZONE_CENTER);
            let currentAccuracy: Accuracy = 'Miss';
            let scoreToAdd = 0;

            if (distance < PERFECT_WINDOW) {
                currentAccuracy = 'Perfect';
                scoreToAdd = 20;
            } else if (distance < GOOD_WINDOW) {
                currentAccuracy = 'Good';
                scoreToAdd = 10;
            } else if (distance < OK_WINDOW) {
                currentAccuracy = 'OK';
                scoreToAdd = 5;
            }

            setAccuracy(currentAccuracy);
            setTimeout(() => setAccuracy(null), 500);

            if (currentAccuracy !== 'Miss') {
                createParticles(hitNote.x + 30, hitNote.y);
                setActiveNotes(prev => prev.filter(n => n.id !== hitNote.id));
                setScore(prev => prev + scoreToAdd * combo);
                setCombo(prev => prev + 1);
            }
        } else {
            setCombo(1);
            setAccuracy('Miss');
            setTimeout(() => setAccuracy(null), 500);
        }
    }
  }

  const handleNoteRelease = (note: string) => {
    setPressedKeys(prev => prev.filter(n => n !== note));
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const note = keyToNote[event.key];
    if (note && !pressedKeys.includes(note)) {
        handleNotePress(note);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const note = keyToNote[event.key];
    if (note) {
        handleNoteRelease(note);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeNotes, combo, gameState, pressedKeys]);

  const resetGameState = () => {
    setGameState('song-selection');
    setSelectedSong(null);
    setActiveNotes([]);
    setScore(0);
    setCombo(1);
    setPressedKeys([]);
    setAccuracy(null);
    setParticles([]);
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
    return <SongSelection onSelectSong={handleSelectSong} onFreestyle={handleFreestyle} highScores={highScores} />;
  }

  if (gameState === 'game-over') {
    return <GameOver score={score} highScore={highScores[selectedSong?.title || ''] || 0} onPlayAgain={resetGameState} />;
  }

  if (gameState === 'freestyle') {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4" tabIndex={0}>
            <button onClick={resetGameState} className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to Menu
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Freestyle</h1>
            <div className="w-full max-w-4xl" ref={pianoContainerRef}>
                <Piano
                    pressedKeys={pressedKeys}
                    onTouchStart={handleNotePress}
                    onTouchEnd={handleNoteRelease}
                />
            </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-start sm:justify-center min-h-screen bg-gray-800 p-4" tabIndex={0}>
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <Score score={score} combo={combo} />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-white my-8">{selectedSong?.title}</h1>
      <div ref={gameContainerRef} className="relative w-full max-w-4xl h-[600px] bg-gray-700 border-2 border-gray-600 overflow-hidden">
        {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} />)}
          {accuracy && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-10 animate-ping">
                {accuracy}
            </div>
          )}
          <div
              className="absolute w-full h-1 bg-green-500 z-0"
              style={{ top: `${HIT_ZONE_CENTER}px`}}
          ></div>
        {activeNotes.map((note) => (
          <Note key={note.id} note={note.note} position={{ x: note.x, y: note.y }} />
        ))}
      </div>
      <div className="w-full max-w-4xl mt-4" ref={pianoContainerRef}>
        <Piano
            pressedKeys={pressedKeys}
            onTouchStart={handleNotePress}
            onTouchEnd={handleNoteRelease}
        />
      </div>
    </div>
  );
};

export default Game;
