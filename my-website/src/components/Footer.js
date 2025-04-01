import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Portfolio', url: '#portfolio' },
    { name: 'About', url: '#about' },
    { name: 'Contact me', url: '#contact' },
    { name: 'Book a call', url: 'https://calendly.com' },
  ];

  const socialMedia = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Behance', url: 'https://behance.net' },
  ];

  return (
    <footer className="py-16 bg-black border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/favicon.ico" 
                alt="Logo" 
                className="w-8 h-8 mr-3 rounded-full"
              />
              <span className="font-bold text-xl">Johnny</span>
            </div>
            
            <p className="text-gray-500 max-w-xs mb-4">
              Product designer crafting
              <br />
              clean & modern designs
            </p>
            
            <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">
              info@example.com
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <ul className="space-y-2">
                {socialMedia.map((platform, index) => (
                  <li key={index}>
                    <a 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Proxio Template
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-500 mr-4">Template created by</p>
            <a 
              href="https://sebadan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Sebadam
            </a>
          </div>
        </div>
        
        <div className="mt-32 mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-800 text-center opacity-20">
            JOHNNY
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;