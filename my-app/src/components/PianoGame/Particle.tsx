import React, { useEffect, useState } from 'react';

interface ParticleProps {
  x: number;
  y: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y }) => {
  const [position, setPosition] = useState({ x, y });
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const animation = () => {
      setPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 20,
        y: prev.y + (Math.random() - 0.5) * 20,
      }));
      setOpacity(prev => prev - 0.05);
    };

    const intervalId = setInterval(animation, 20);

    return () => clearInterval(intervalId);
  }, []);

  if (opacity <= 0) {
    return null;
  }

  return (
    <div
      className="absolute rounded-full bg-yellow-400"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '10px',
        height: '10px',
        opacity,
        transition: 'opacity 0.5s ease-out',
      }}
    />
  );
};

export default Particle;
