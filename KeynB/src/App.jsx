import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


// Import your main page sections
import { LandingPage } from './LandingPage';
import Footer from './components/Footer'; // Corrected import path/name

// Import your new components
import Summary from './components/Summary';
import ExperienceCards from './components/ExperienceCards';
import ProjectsCard from './components/ProjectCard';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import dailyJournalImage from './assets/MyDJapp.png'; // Assuming you put it in src/assets



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
      {/* Add your new sections here */}
      <Summary />
      <ExperienceCards />
      <ProjectsCard MyDJapp={dailyJournalImage} />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;