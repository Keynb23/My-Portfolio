import React from 'react';

const Languages = () => {
  const skills = {
    languages: ["JavaScript", "Python", "HTML", "CSS"],
    frameworksLibraries: ["React", "Flask", "Tailwind CSS", "Three.js"],
    databases: ["MySQL", "SQLite"],
    toolsDevOps: ["Postman", "MySQL Workbench", "Git", "GitHub", "VS Code", "Figma", "Responsive Design Tools"],
    other: ["RESTful API Development", "Responsive Design", "Agile Methodologies", "UI/UX Collaboration", "Component-Based Architecture", "Web Animations", "Agile Environments"],
    certifications: ["Coding Temple Software Engineering Certificate (Expected May 2025)"]
  };

  return (
    <section className="languages-section py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-white">Skills & Technologies</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        
        <div data-aos="fade-up" data-aos-delay="100" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Languages</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Frameworks/Libraries</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.frameworksLibraries.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Databases</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.databases.map((db, index) => (
              <li key={index}>{db}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Tools/DevOps</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.toolsDevOps.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Other Skills</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.other.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="skill-category p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300">
            {skills.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Languages;