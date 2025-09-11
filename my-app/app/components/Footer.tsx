import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Digital Farm</h3>
            <p className="text-gray-400">Modernizing agriculture, one farm at a time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul>
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white">Features</Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Digital Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
