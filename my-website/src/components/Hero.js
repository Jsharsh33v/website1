import React from 'react';
import ThreeModel from './ThreeModel';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="hero">
      <div className="container">
        {/* Badge */}
        <div className="inline-block bg-gray-800 rounded-full px-4 py-1 mb-8 animate-on-scroll">
          <span className="text-white">Hello, I'm Johnny 👋</span>
        </div>
        
        {/* Main headline */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
            <span className="block">Product designer</span> 
            <span className="block text-gray-500">crafting clean & modern designs</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-12 mt-8 animate-on-scroll delay-200">
            <a href="#contact" className="button button-hover flex items-center">
              Email me
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* 3D model using Three.js */}
      <div 
        className="three-model-container"
      >
        <ThreeModel />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;