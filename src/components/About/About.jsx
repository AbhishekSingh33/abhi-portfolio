import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Abhishek Singh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white"> </span>
            
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
         Analytical and detail-oriented Data Analyst with 1 year of hands-on experience in data
cleaning, visualization, and business intelligence. Proficient in Python, SQL, Power BI,
Excel, and Tableau, with a strong foundation in data modeling, statistical analysis, and
dashboard automation. Adept at transforming raw data into actionable insights to support
strategic decision-making. Seeking a dynamic role as a Data Analyst / Business Intelligence
Analyst / Reporting Analyst to contribute to data-driven business growth.</p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1W1_K5SSMWNm4KHx5Pu1BMIdHUiIdXuOV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
         
            <img
              src="https://res.cloudinary.com/dcph8gu46/image/upload/v1758041514/abhishek_ayuzqm.png"
              alt="Abhishek Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            /> 
         
        </div>
      </div>
    </section>
  );
};


export default About

