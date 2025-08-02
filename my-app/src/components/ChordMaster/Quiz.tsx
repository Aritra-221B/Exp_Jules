import React from 'react';

interface QuizProps {
  options: string[];
  onAnswer: (answer: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ options, onAnswer }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onAnswer(option)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-2 rounded-lg text-xl"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
