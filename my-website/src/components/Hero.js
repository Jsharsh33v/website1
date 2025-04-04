import React from 'react';

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
      
      {/* SVG animated blob */}
      <div className="hero-decoration">
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="blob-svg"
        >
          <path 
            fill="#555555"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.1C87,14,81.3,28.1,73.1,41.2C65,54.4,54.4,66.7,41.3,74.4C28.1,82,14,85,0,85C-14.1,85,-28.1,82,-39.8,74.4C-51.4,66.7,-60.7,54.4,-67.1,41.2C-73.5,28.1,-77,14,-77.9,-0.5C-78.9,-15,-77.4,-30.1,-70.7,-43.3C-63.9,-56.5,-51.9,-67.9,-38.5,-75.2C-25,-82.5,-12.5,-85.7,1.1,-87.6C14.7,-89.4,29.4,-89.8,44.7,-84.6Z" 
            transform="translate(100 100)"
            className="blob-path"
          />
        </svg>
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