import React from 'react';

interface GameOverProps {
  score: number;
  onPlayAgain: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, onPlayAgain }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-6xl font-bold mb-4">Game Over</h1>
      <p className="text-3xl mb-8">Your final score is: {score}</p>
      <button
        onClick={onPlayAgain}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-2xl"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
