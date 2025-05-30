import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { LandingPage } from './LandingPage';
import Footer from './components/Footer'; // Corrected import path/name

// Import your new components
import Summary from './components/Summary';
import ExperienceCards from './components/ExperienceCards';
import Projects from './components/ProjectCard';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';



function App() {
  useEffect(() => {
    AOS.init({
      // Optional: Add global AOS settings here if needed
      // once: true, // animations only run once
    });
  }, []);

  return (
    <>
      
      <LandingPage />
      <Summary />
      <ExperienceCards />
      <div className="app-container">
      <Skills />
      <Projects />
    </div>
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;