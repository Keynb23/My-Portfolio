import React from 'react';
import './styles/XP.css';


const ExperienceCards = () => {
  return (
    <section className="experience-section py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-white">Experience</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">

        {/* Experience 1: Software Engineer */}
        <div className="experience-card bg-gray-800 rounded-lg shadow-xl p-6 text-left" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-white mb-1">Software Engineer - Coding Temple</h3>
          <p className="text-purple-400 text-lg mb-2">Remote</p>
          <p className="text-gray-400 mb-4">March 2025 - May 2025</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed front-end components with React and JSX to build responsive, reusable UI features.</li>
            <li>Applied CSS and JavaScript to implement interactive user interfaces and animations.</li>
            <li>Collaborated in Agile teams to prototype, test, and refine web-based user experiences.</li>
            <li>Built and tested front-end interfaces using React and JavaScript, enhancing user experience for web applications with responsive design principles.</li>
            <li>Implemented back-end APIs with Flask and MySQL, handling data persistence and retrieval for dynamic content delivery.</li>
          </ul>
        </div>

        {/* Experience 2: Sales Representative */}
        <div className="experience-card bg-gray-800 rounded-lg shadow-xl p-6 text-left" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-white mb-1">Sales Representative - Drewing Automotive</h3>
          <p className="text-purple-400 text-lg mb-2">Columbia, MO</p>
          <p className="text-gray-400 mb-4">April 2021 - December 2023</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Managed client relationships, assessing needs and presenting tailored solutions through effective communication and follow-up.</li>
          </ul>
        </div>

        {/* Experience 3: Laborer */}
        <div className="experience-card bg-gray-800 rounded-lg shadow-xl p-6 text-left" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-white mb-1">Laborer - Helitech Foundation Repair & Waterproofing</h3>
          <p className="text-purple-400 text-lg mb-2">Kingdom City, MO</p>
          <p className="text-gray-400 mb-4">January 2024 - December 2024</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Assessed structural damage in client homes, coordinating with teams to execute precise repairs, completing projects with little to no rework requests due to thorough planning and execution.</li>
            <li>Optimized inventory management and tool preparation, reducing project setup time and ensuring clean, professional work environments for clients.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ExperienceCards;