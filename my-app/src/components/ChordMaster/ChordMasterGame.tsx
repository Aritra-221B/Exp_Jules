import React, { useState, useEffect, useRef } from 'react';
import { chords, Chord } from './chords';
import { AudioEngine } from './AudioEngine';
import { soundMap } from './sounds';
import Keyboard from './Keyboard';
import Fretboard from './Fretboard';
import Quiz from './Quiz';
import Score from './Score';

const getRandomChord = (level: number): Chord => {
  const filteredChords = chords.filter((chord) => chord.level === level);
  const randomIndex = Math.floor(Math.random() * filteredChords.length);
  return filteredChords[randomIndex];
};

const getQuizOptions = (correctChord: Chord, level: number): string[] => {
  const options = [correctChord.name];
  const incorrectChords = chords.filter(
    (chord) => chord.level === level && chord.name !== correctChord.name
  );

  while (options.length < 4 && incorrectChords.length > 0) {
    const randomIndex = Math.floor(Math.random() * incorrectChords.length);
    const incorrectChord = incorrectChords.splice(randomIndex, 1)[0];
    options.push(incorrectChord.name);
  }

  return options.sort(() => Math.random() - 0.5); // Shuffle the options
};

type Instrument = 'piano' | 'guitar';

const ChordMasterGame: React.FC = () => {
  const [instrument, setInstrument] = useState<Instrument>('piano');
  const [currentChord, setCurrentChord] = useState<Chord | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const audioEngineRef = useRef<AudioEngine | null>(null);

  useEffect(() => {
    audioEngineRef.current = new AudioEngine();
    audioEngineRef.current.loadSounds(soundMap);
  }, []);

  const nextRound = () => {
    const newChord = getRandomChord(level);
    setCurrentChord(newChord);
    setQuizOptions(getQuizOptions(newChord, level));
    audioEngineRef.current?.playChord(newChord.notes);
  };

  useEffect(() => {
    nextRound();
  }, [level, instrument]);

  const handleAnswer = (answer: string) => {
    if (answer === currentChord?.name) {
      setScore((prev) => prev + 10 * (streak + 1));
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
    nextRound();
  };

  if (!currentChord) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setInstrument(instrument === 'piano' ? 'guitar' : 'piano')}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Switch to {instrument === 'piano' ? 'Guitar' : 'Piano'}
        </button>
      </div>
      <Score score={score} streak={streak} />
      {instrument === 'piano' ? (
        <Keyboard highlightedNotes={currentChord.notes} />
      ) : (
        <Fretboard highlightedNotes={currentChord.guitarVoicing || []} />
      )}
      <button
        onClick={() => audioEngineRef.current?.playChord(currentChord.notes)}
        className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play Chord Again
      </button>
      <Quiz options={quizOptions} onAnswer={handleAnswer} />
    </div>
  );
};

export default ChordMasterGame;
