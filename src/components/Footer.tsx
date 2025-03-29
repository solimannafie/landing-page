
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Joybraid</h2>
            <p className="text-gray-400 mt-2">Activation drives togetherness</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-800 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 Joybraid All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
