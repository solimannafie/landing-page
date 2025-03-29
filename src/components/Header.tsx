
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-blue-700">Joybraid</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-700 transition-colors">
            How It Works
          </a>
          <a href="#join" className="text-gray-600 hover:text-blue-700 transition-colors">
            Join Now
          </a>
        </nav>
        
        <a 
          href="#join" 
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full flex items-center text-sm md:text-base transition-colors"
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
