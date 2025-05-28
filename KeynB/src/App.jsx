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
import ProjectsCards from './components/ProjectCards';
import Languages from './components/Languages';
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
      <ProjectsCards MyDJapp={dailyJournalImage} />
      <Languages />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;