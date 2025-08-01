import React from 'react';

interface ScoreProps {
  score: number;
  combo: number;
}

const Score: React.FC<ScoreProps> = ({ score, combo }) => {
  return (
    <div className="text-white text-2xl font-bold">
      <div className="mb-2">Score: {score}</div>
      <div>Combo: {combo}x</div>
    </div>
  );
};

export default Score;
