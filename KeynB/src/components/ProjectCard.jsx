import htmlIcon from '../assets/five.svg';
import cssIcon from '../assets/Css.svg';
import jsIcon from '../assets/Js.svg';
import MyDJapp from '../assets/MyDJapp.png';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-description">
          A selection of projects that showcase my skills and passion for
          development.
        </p>
      </div>

      <div className="projects-list-container">
        {/* Project 1 */}
        <div className="project-stagger-wrapper project-stagger-left">
          <div className="project-card">
            <img src={MyDJapp} alt="Daily Journal App" className="project-image"/>
            <div className="project-details">
              <h3 className="project-name">Daily Journal App</h3>
              <p className="project-description-text">
                A sleek, private, and user-friendly daily journaling app. Comes with 9 color schemes to choose from. Made with HTML, JS, and CSS.
              </p>
              <div className="project-tech-icons">
                <img src={htmlIcon} alt="HTML icon" className="tech-icon" title="HTML"/>
                <img src={cssIcon} alt="CSS icon" className="tech-icon" title="CSS"/>
                <img src={jsIcon} alt="JavaScript icon" className="tech-icon" title="JavaScript"/>
              </div>
              <div className="project-links">
                <a href="https://djapp-beryl.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Keynb23/WebJournal" className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-stagger-wrapper project-stagger-right">
          <div className="project-card">
            <img src={MyDJapp} alt="Daily Journal App" className="project-image"/>
            <div className="project-details">
              <h3 className="project-name">Daily Journal App</h3>
              <p className="project-description-text">
                A sleek, private, and user-friendly daily journaling app. Comes with 9 color schemes to choose from. Made with HTML, JS, and CSS.
              </p>
              <div className="project-tech-icons">
                <img src={htmlIcon} alt="HTML icon" className="tech-icon" title="HTML"/>
                <img src={cssIcon} alt="CSS icon" className="tech-icon" title="CSS"/>
                <img src={jsIcon} alt="JavaScript icon" className="tech-icon" title="JavaScript"/>
              </div>
              <div className="project-links">
                <a href="https://djapp-beryl.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Keynb23/WebJournal" className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-stagger-wrapper project-stagger-left">
          <div className="project-card">
            <img src={MyDJapp} alt="Daily Journal App" className="project-image"/>
            <div className="project-details">
              <h3 className="project-name">Daily Journal App</h3>
              <p className="project-description-text">
                A sleek, private, and user-friendly daily journaling app. Comes with 9 color schemes to choose from. Made with HTML, JS, and CSS.
              </p>
              <div className="project-tech-icons">
                <img src={htmlIcon} alt="HTML icon" className="tech-icon" title="HTML"/>
                <img src={cssIcon} alt="CSS icon" className="tech-icon" title="CSS"/>
                <img src={jsIcon} alt="JavaScript icon" className="tech-icon" title="JavaScript"/>
              </div>
              <div className="project-links">
                <a href="https://djapp-beryl.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Keynb23/WebJournal" className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-stagger-wrapper project-stagger-right">
          <div className="project-card">
            <img src={MyDJapp} alt="Daily Journal App" className="project-image"/>
            <div className="project-details">
              <h3 className="project-name">Daily Journal App</h3>
              <p className="project-description-text">
                A sleek, private, and user-friendly daily journaling app. Comes with 9 color schemes to choose from. Made with HTML, JS, and CSS.
              </p>
              <div className="project-tech-icons">
                <img src={htmlIcon} alt="HTML icon" className="tech-icon" title="HTML"/>
                <img src={cssIcon} alt="CSS icon" className="tech-icon" title="CSS"/>
                <img src={jsIcon} alt="JavaScript icon" className="tech-icon" title="JavaScript"/>
              </div>
              <div className="project-links">
                <a href="https://djapp-beryl.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Keynb23/WebJournal" className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;