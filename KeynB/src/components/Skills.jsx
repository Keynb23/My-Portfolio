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

    <div className='Skills-section-bg'>
     <div className="banner">
        <div className="slider" 
>            <div className="item"><img src={JS} alt="JavaScript" /></div>
            <div className="item"><img src={Python} alt="Python" /></div>
            <div className="item"><img src={Html5} alt="HTML5" /></div>
            <div className="item"><img src={Css} alt="CSS" /></div>
            <div className="item"><img src={ReactLogo} alt="React" /></div>
            <div className="item"><img src={TS} alt="TypeScript" /></div>
            <div className="item"><img src={Threejs} alt="Three.js" /></div>
            <div className="item"><img src={SQL} alt="SQL" className="icon-8" /></div>
            <div className="item"><img src={Postman} alt="Postman" className="icon-9" /></div>
            <div className="item"><img src={CodeT} alt="CodeT" className="icon-10" /></div>
          </div>
        </div>
      </div>
)};

export default Skills;
