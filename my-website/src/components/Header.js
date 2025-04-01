import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/favicon.ico" 
            alt="Logo" 
            className="w-8 h-8 mr-2 rounded-full"
          />
          <span className="font-bold text-xl">Johnny</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#career" className="hover:text-white">Career</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        <a 
          href="#contact" 
          className="hidden md:block button-hover"
        >
          Get template
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black py-4 px-6 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li><a href="#portfolio" className="block py-2" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#about" className="block py-2" onClick={toggleMenu}>About</a></li>
            <li><a href="#career" className="block py-2" onClick={toggleMenu}>Career</a></li>
            <li><a href="#contact" className="block py-2" onClick={toggleMenu}>Contact</a></li>
            <li>
              <a 
                href="#contact" 
                className="button-hover inline-flex items-center"
                onClick={toggleMenu}
              >
                Get template
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
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;