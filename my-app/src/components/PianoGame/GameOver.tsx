import React from 'react';

interface GameOverProps {
  score: number;
  highScore: number;
  onPlayAgain: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, highScore, onPlayAgain }) => {
  const isNewHighScore = score > highScore;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4 sm:p-8 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4">Game Over</h1>
      {isNewHighScore && <p className="text-3xl text-yellow-400 font-bold mb-4">New High Score!</p>}
      <p className="text-2xl sm:text-3xl mb-2">Your score: {score}</p>
      <p className="text-xl sm:text-2xl mb-8">High score: {highScore}</p>
      <button
        onClick={onPlayAgain}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-2xl"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
