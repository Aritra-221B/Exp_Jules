import React from 'react';

interface ScoreProps {
  score: number;
  streak: number;
}

const Score: React.FC<ScoreProps> = ({ score, streak }) => {
  return (
    <div className="text-white text-2xl font-bold text-center">
      <div className="mb-2">Score: {score}</div>
      <div>Streak: {streak}x</div>
    </div>
  );
};

export default Score;
