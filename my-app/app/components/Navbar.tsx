import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
            Digital Farm
          </Link>
        </div>
        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/about" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
              About
            </Link>
            <Link href="/features" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
              Features
            </Link>
            <Link href="/contact" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
