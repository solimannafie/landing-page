
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Joybraid</h1>
        <div className="mb-8">
          <p className="text-xl md:text-2xl font-medium mb-4">
            Activation drives togetherness | revenue | earnings | delight | value
          </p>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
        </div>
        <p className="mx-auto max-w-3xl text-lg md:text-xl mb-10">
          Joybraid equips brands and Activators to generate live togetherness in the real world 
          to empower financial prosperity for businesses and geosocial influencers alike.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a 
            href="#join-activator" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Join as Activator
          </a>
          <a 
            href="#join-brand" 
            className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Join as Brand
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
