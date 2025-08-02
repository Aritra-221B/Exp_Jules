import React from 'react';

interface UserGuideProps {
  onClose: () => void;
}

const UserGuide: React.FC<UserGuideProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-lg max-w-lg w-full mx-4">
        <h2 className="text-3xl font-bold mb-4">How to Play</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Desktop</h3>
          <p className="text-lg">Use your keyboard to play the piano.</p>
          <ul className="list-disc list-inside ml-4">
            <li>White Keys: <kbd>a</kbd>, <kbd>s</kbd>, <kbd>d</kbd>, <kbd>f</kbd>, <kbd>g</kbd>, <kbd>h</kbd>, <kbd>j</kbd></li>
            <li>Black Keys: <kbd>w</kbd>, <kbd>e</kbd>, <kbd>t</kbd>, <kbd>y</kbd>, <kbd>u</kbd></li>
          </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Mobile</h3>
            <p className="text-lg">Tap the piano keys on your screen to play.</p>
        </div>
        <p className="text-lg">In the game, hit the notes as they fall into the hit zone at the bottom of the screen.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default UserGuide;
