import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Logoipsum Mobile App',
      year: '2024',
      image: 'https://via.placeholder.com/600x400/111111/333333',
      category: 'Mobile App Design'
    },
    {
      id: 2,
      title: 'Logo Landing Page',
      year: '2023',
      image: 'https://via.placeholder.com/600x400/111111/333333',
      category: 'Web Design'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      year: '2023',
      image: 'https://via.placeholder.com/600x400/111111/333333',
      category: 'Branding'
    },
    {
      id: 4,
      title: 'E-commerce Dashboard',
      year: '2022',
      image: 'https://via.placeholder.com/600x400/111111/333333',
      category: 'UI/UX Design'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 mb-4 animate-on-scroll">
            <span className="text-white">Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
            My Latest <span className="text-white">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card animate-on-scroll hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-12">
          <button className="button button-hover animate-on-scroll">
            View All Projects
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;