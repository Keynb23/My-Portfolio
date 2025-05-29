import Css from '../assets/Css.svg';
import Html5 from '../assets/five.svg';
import JS from '../assets/JS.svg';
import Postman from '../assets/Postman.svg';
import Python from '../assets/Python.svg';
import ReactLogo from '../assets/logo.svg';
import TS from '../assets/TS.svg';
import SQL from '../assets/SQL.svg';
import Threejs from '../assets/Threejs.svg';
import './styles/Skills.css';
import CodeT from '../assets/CodeT.png';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">

        <div className="skills-card">
          <h3 className="skills-heading">Languages</h3>
          <div className="skills-icons animate-group">
            <img src={JS} alt="JavaScript" className="icon animate-in delay-1" />
            <img src={Python} alt="Python" className="icon animate-in delay-2" />
            <img src={Html5} alt="HTML5" className="icon animate-in delay-3" />
            <img src={Css} alt="CSS" className="icon animate-in delay-4" />
          </div>
        </div>

        <div className="skills-card">
          <h3 className="skills-heading">Frameworks/Libraries</h3>
          <div className="skills-icons animate-group">
            <img src={ReactLogo} alt="React" className="icon animate-in delay-1" />
            <img src={TS} alt="TypeScript" className="icon animate-in delay-2" />
            <img src={Threejs} alt="Three.js" className="icon animate-in delay-3" />
          </div>
        </div>

        <div className="skills-card">
          <h3 className="skills-heading">Databases</h3>
          <img src={SQL} alt="SQL" className="icon animate-in delay-2" />
        </div>

        <div className="skills-card">
          <h3 className="skills-heading">Tools/DevOps</h3>
          <img src={Postman} alt="Postman" className="icon animate-in delay-3" />
        </div>

        <div className="skills-card">
          <h3 className="skills-heading">Certifications</h3>
          <img src={CodeT} alt="CodeT" className="icon-single animate-in delay-1" />
          <ul className="skills-cert">
            <li>Coding Temple Software Engineering Certificate (Expected May 2025)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
