import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-green-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
          Revolutionizing Farm Management
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A Digital Medicine Passport for your livestock, ensuring safety and traceability.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
