import React from 'react';


const AboutSection = () => {
  return (
    <section className="relative bg-[#1a1a1a] text-white py-16 md:py-24 overflow-hidden">
      {/* Hexagonal Background Patterns (simplified for Tailwind) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-40 h-40 bg-gray-700 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-52 h-52 bg-gray-700 rounded-full blur-3xl bottom-20 right-20"></div>
        <div className="absolute w-32 h-32 bg-gray-800 rounded-full blur-3xl top-1/2 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-gray-800 rounded-full blur-3xl bottom-1/4 right-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col justify-center">
          {/* Trusted By Badge */}
          <div className="mb-6">
            <span className="inline-block bg-gray-800 text-gray-300 text-xs px-4 py-2 rounded-full font-medium tracking-wide">
              Trusted by 1.5M+ Developers Worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Consistency <br className="hidden md:block" /> and Community
          </h1>

          {/* Description Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Content is everywhere. We provide what's rare — <span className="font-semibold text-white">an unmatched, community-driven learning experience</span> with peer learning, bounties, code reviews, doubt sessions, alumni network.
          </p>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-200 transition-colors"
            >
              Start Learning
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-800 transition-colors"
            >
              See The Impact
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Replace with your actual image */}
          <img
             // Placeholder, replace with your image URL
            alt="Smiling person giving a thumbs up"
            className="w-full max-w-md lg:max-w-none rounded-lg shadow-lg" // Adjust styling as needed
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;