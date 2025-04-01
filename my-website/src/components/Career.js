import React from 'react';

const Career = () => {
  const careerSteps = [
    {
      id: 1,
      title: 'Freelance Architect',
      period: '2016-2020',
      description: 'As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.'
    },
    {
      id: 2,
      title: 'Product Designer at Spotify',
      period: '2020-2022',
      description: 'At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.'
    },
    {
      id: 3,
      title: 'Freelance Product Designer',
      period: '2022-Now',
      description: 'Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.'
    }
  ];

  // Services
  const services = [
    'App Design',
    'Product Design',
    'Web Design',
    'Logo Design',
    'Mobile App Design',
    'UI/UX Design',
    'Brand Identity',
    'Prototyping'
  ];

  return (
    <section id="career" className="py-24 bg-black">
      <div className="container">
        <div className="mb-12">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 mb-4 animate-on-scroll">
            <span className="text-white">Career</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
            And This Is <span className="text-white">My Career</span>
          </h2>
        </div>

        {/* Career Timeline */}
        <div className="space-y-20">
          {careerSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                <p className="text-gray-500">{step.period}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < careerSteps.length - 1 && (
                <div className="relative col-span-full">
                  <div className="hidden md:block absolute left-2/5 w-px h-16 bg-gray-800 transform -translate-x-1/2 -bottom-16"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-32">
          <div className="flex overflow-x-auto py-6 scrollbar-hide">
            <div className="flex space-x-6 animate-scroll">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900 text-white rounded-full whitespace-nowrap px-6 py-3"
                >
                  {service}
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {services.map((service, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-gray-900 text-white rounded-full whitespace-nowrap px-6 py-3"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;