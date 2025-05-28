import React from 'react';

const ExperienceCards = () => {
  const experiences = [
    {
      type: "Software Engineer",
      title: "Coding Temple",
      location: "Remote",
      duration: "March 2025 - May 2025",
      responsibilities: [
        "Developed front-end components with React and JSX to build responsive, reusable UI features.",
        "Applied CSS and JavaScript to implement interactive user interfaces and animations.",
        "Collaborated in Agile teams to prototype, test, and refine web-based user experiences.",
        "Built and tested front-end interfaces using React and JavaScript, enhancing user experience for web applications with responsive design principles.",
        "Implemented back-end APIs with Flask and MySQL, handling data persistence and retrieval for dynamic content delivery."
      ]
    },
    {
      type: "Sales Representative",
      title: "Drewing Automotive",
      location: "Columbia, MO",
      duration: "April 2021 - December 2023",
      responsibilities: [
        "Managed client relationships, assessing needs and presenting tailored solutions through effective communication and follow-up."
      ]
    },
    {
      type: "Laborer",
      title: "Helitech Foundation Repair & Waterproofing",
      location: "Kingdom City, MO",
      duration: "January 2024 - December 2024",
      responsibilities: [
        "Assessed structural damage in client homes, coordinating with teams to execute precise repairs, completing projects with little to no rework requests due to thorough planning and execution.",
        "Optimized inventory management and tool preparation, reducing project setup time and ensuring clean, professional work environments for clients."
      ]
    }
  ];

  return (
    <section className="experience-section py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-white">Experience</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card bg-gray-800 rounded-lg shadow-xl p-6 text-left" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <h3 className="text-2xl font-semibold text-white mb-1">{exp.type} - {exp.title}</h3>
            <p className="text-purple-400 text-lg mb-2">{exp.location}</p>
            <p className="text-gray-400 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.responsibilities.map((res, resIndex) => (
                <li key={resIndex}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCards;