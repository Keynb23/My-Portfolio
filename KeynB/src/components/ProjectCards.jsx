


const ProjectsCards = ({ dailyJournalScreenshot }) => { // Accept screenshot as prop
  const projects = [
    {
      name: "Daily Journal App",
      description: "A web application created to track daily programming progress, built with a focus on user experience and real-time updates.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Vercel"],
      link: "https://djapp-beryl.vercel.app/",
      image: dailyJournalScreenshot // Use the prop for the image
    },
    {
      name: "Portfolio Website (This one!)",
      description: "A personal portfolio built with React and Vite, showcasing 3D animations and modern web development practices.",
      technologies: ["React", "Vite", "Spline 3D", "AOS", "CSS"],
      link: "#", // Placeholder, you can update this later
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Portfolio+Placeholder" // Placeholder for this project
    }
    // Add more projects here
  ];

  return (
    <section className="projects-section py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-white">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            {project.image && (
              <img 
                src={project.image} 
                alt={`${project.name} screenshot`} 
                className="w-full h-64 object-cover" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/2a2a2a/ffffff?text=Image+Not+Found"; }}
              />
            )}
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag bg-purple-600 text-white text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                >
                  View Project <span className="ml-2">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCards;