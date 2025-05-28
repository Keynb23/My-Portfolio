import Css from '../assets/Css.svg';
import Html5 from '../assets/five.svg'; // html5 logo
import JS from '../assets/JS.svg';
import Postman from '../assets/Postman.svg';
import Python from '../assets/Python.svg';
import ReactLogo from '../assets/logo.svg'; // react logo
import TS from '../assets/TS.svg';
import SQL from '../assets/SQL.svg';
import Threejs from '../assets/Threejs.svg';
import './styles/Skills.css'

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 data-aos="fade-up" className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">

        <div data-aos="fade-up" data-aos-delay="100" className="skills-card">
          <h3 className="skills-heading">Languages</h3>
          <div className="skills-icons">
            <img src={JS} alt="JavaScript" className="icon" />
            <img src={Python} alt="Python" className="icon" />
            <img src={Html5} alt="HTML5" className="icon" />
            <img src={Css} alt="CSS" className="icon" />
          </div>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="skills-card">
          <h3 className="skills-heading">Frameworks/Libraries</h3>
          <div className="skills-icons">
            <img src={ReactLogo} alt="React" className="icon" />
            <img src={TS} alt="TypeScript" className="icon" />
            <img src={Threejs} alt="Three.js" className="icon" />
          </div>
          <ul className="skills-list">
            <li>React</li>
            <li>Flask</li>
            <li>Tailwind CSS</li>
            <li>Three.js</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="skills-card">
          <h3 className="skills-heading">Databases</h3>
          <img src={SQL} alt="SQL" className="icon-single" />
          <ul className="skills-list">
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="skills-card">
          <h3 className="skills-heading">Tools/DevOps</h3>
          <img src={Postman} alt="Postman" className="icon-single" />
          <ul className="skills-list">
            <li>Postman</li>
            <li>MySQL Workbench</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Responsive Design Tools</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="skills-card">
          <h3 className="skills-heading">Other Skills</h3>
          <ul className="skills-list">
            <li>RESTful API Development</li>
            <li>Responsive Design</li>
            <li>Agile Methodologies</li>
            <li>UI/UX Collaboration</li>
            <li>Component-Based Architecture</li>
            <li>Web Animations</li>
            <li>Agile Environments</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="skills-card">
          <h3 className="skills-heading">Certifications</h3>
          <ul className="skills-list">
            <li>Coding Temple Software Engineering Certificate (Expected May 2025)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;