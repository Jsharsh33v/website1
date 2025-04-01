import React from 'react';

const About = () => {
  const stats = [
    { label: 'Years of experience', value: '8+' },
    { label: 'Clients', value: '20+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Hours of Designing', value: '10,000+' }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="mb-12">
          <p className="text-3xl font-light text-center animate-on-scroll">
            Creating products that look amazing and convert well.
            <br />
            This way both sides will be satisfied. Say no more to
            <br />
            products that benefit only one site. With my design
            <br />
            skills <span className="font-bold">you will scale to the moon!</span>
          </p>
        </div>

        <div className="relative mt-24">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 mb-4 animate-on-scroll">
            <span className="text-white">About</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile image */}
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <img 
                  src="https://via.placeholder.com/600x600/111111/333333" 
                  alt="Johnny" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* About text */}
            <div>
              <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
                I am an Architect Turned
                <br />
                Into a <span className="text-white">Product Designer</span>
              </h2>
              
              <p className="text-gray-400 mb-8 animate-on-scroll delay-100">
                With a background in architecture, I now apply my expertise to product 
                design, blending aesthetics, functionality, and innovation. My goal is to 
                create modern, user-focused designs that bring your vision to life.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="animate-on-scroll"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;