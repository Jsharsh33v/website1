import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you ensure that your designs meet user needs and business goals?',
      answer: 'I follow a user-centered design process that begins with thorough research to understand both user needs and business objectives. I create personas, journey maps, and conduct user interviews to identify pain points and opportunities. Throughout the design process, I validate concepts through testing and gather feedback to ensure the final product delivers value to users while achieving business goals. This balanced approach leads to designs that are not only aesthetically pleasing but also functional and strategic.'
    },
    {
      question: 'Do you offer freelance or contract design services?',
      answer: 'Yes, I offer both freelance and contract design services. I can work on a project basis for specific deliverables or on a retainer for ongoing design needs. My services include UX research, wireframing, prototyping, visual design, and collaboration with development teams for implementation. I\'m flexible with engagement models and can adapt to your team\'s workflow and tools.'
    },
    {
      question: 'Can you walk me through a specific project in your portfolio?',
      answer: 'Absolutely! Each project in my portfolio follows a structured case study format that outlines the challenge, approach, process, and outcomes. I can walk you through my problem-solving methodology, design decisions, collaboration with stakeholders, and how the solution evolved based on feedback and testing. I\'m happy to explain how I navigated constraints and leveraged opportunities to deliver successful outcomes for both users and business stakeholders.'
    },
    {
      question: 'What tools and software do you use for your design work?',
      answer: 'I use a comprehensive suite of design tools tailored to different stages of the design process. For UX research and planning, I use Miro and FigJam. For wireframing and prototyping, I primarily work with Figma and occasionally Adobe XD. For visual design, I use Adobe Creative Suite (Photoshop, Illustrator). For design systems management, I leverage Figma\'s component libraries and variants. For collaboration and handoff to developers, I use Zeplin or Figma\'s inspect mode. I\'m adaptable and can quickly learn new tools to align with your team\'s workflow.'
    },
    {
      question: 'What is your design process, and how do you approach new projects?',
      answer: 'My design process follows a cyclical framework of Discover, Define, Design, and Deliver. I start by researching user needs, business goals, and market context. Then I define the problem space through user journeys and requirements. The design phase involves ideation, prototyping, and iterative testing. Finally, I deliver polished designs with documentation for implementation. Throughout this process, I maintain open communication with stakeholders and remain flexible to adapt to new insights or changing requirements.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 mb-4 animate-on-scroll">
            <span className="text-white">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
            Frequently Asked <span className="text-white">Questions</span>
          </h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-arrow ${openIndex === index ? 'rotate' : ''}`}
                  width="24" 
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Did not find the answer you're looking for?
            <br />
            Contact <a href="mailto:info@example.com" className="text-white hover:underline">info@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;