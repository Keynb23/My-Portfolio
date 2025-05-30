import Css from "../assets/Css.svg";
import Html5 from "../assets/five.svg";
import JS from "../assets/JS.svg";
import Postman from "../assets/Postman.svg";
import Python from "../assets/Python.svg";
import ReactLogo from "../assets/logo.svg";
import TS from "../assets/TS.svg";
import SQL from "../assets/SQL.svg";
import Threejs from "../assets/Threejs.svg";
import CodeT from "../assets/CodeT.png";
import "./styles/Skills.css";
import { useEffect, useRef } from 'react';

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rows = containerRef.current.querySelectorAll('.icon-row');
      rows.forEach((row) => {
        const direction = row.dataset.direction;
        // Adjust translateY for continuous vertical movement based on scroll
        const offset = direction === 'left' ? scrollY * 0.5 : -scrollY * 0.5;
        row.style.transform = `translateY(${offset}px)`;
        row.style.opacity = '0.3'; // Keep visible with low opacity
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="skills-parent">
      <div className="Skills-section" ref={containerRef}>
        <div className="icon-row" data-direction="left"><img src={JS} alt="JavaScript" /></div>
        <div className="icon-row" data-direction="right"><img src={Python} alt="Python" /></div>
        <div className="icon-row" data-direction="left"><img src={Html5} alt="HTML5" /></div>
        <div className="icon-row" data-direction="right"><img src={Css} alt="CSS" /></div>
        <div className="icon-row" data-direction="left"><img src={ReactLogo} alt="React" /></div>
        <div className="icon-row" data-direction="right"><img src={TS} alt="TypeScript" /></div>
        <div className="icon-row" data-direction="left"><img src={Threejs} alt="Three.js" /></div>
        <div className="icon-row" data-direction="right"><img src={SQL} alt="SQL" /></div>
        <div className="icon-row" data-direction="left"><img src={Postman} alt="Postman" /></div>
        <div className="icon-row" data-direction="right"><img src={CodeT} alt="CodeT" /></div>
      </div>
    </div>
  );
};

export default Skills;