import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'url("https://via.placeholder.com/1920x1080/000000/333333")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Let's Get in <span className="text-white">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8 animate-on-scroll delay-100">
            Let's connect and start with your project ASAP.
          </p>
          
          <div className="flex justify-center mb-8 animate-on-scroll delay-200">
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-hover"
            >
              Book a call
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
          
          <p className="text-gray-500 animate-on-scroll delay-300">
            Or email <a href="mailto:info@example.com" className="text-white hover:underline">info@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;