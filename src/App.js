import './App.css';
import 'animate.css';
import './fonts/BerkeleyMono-Regular.ttf'
import { NavigationBar } from './Components/NavigationBar/NavigationBar'
import { AboutSection } from './Components/AboutSection/AboutSection';
import { useEffect, useState } from 'react'
import { ExperienceSection } from './Components/ExperienceSection/ExperienceSection';
import { BlogSection } from './Components/BlogSection/BlogSection';
import { ProjectSection } from './Components/ProjectsSection/ProjectsSection';
import { ContactSection } from './Components/ContactSection/ContactSection';

function App() {
  
  const [selectedSection, setSelectedSection] = useState('About')

  return (
    <div className="App">
      <div className="MainContainer">
        <div className="NameContainer">
          <h2>Dhiraj Shrotri</h2>
        </div>
        <div className='CardsContainers'>
          <NavigationBar 
            selectedSection={selectedSection} 
            setSelectedSection={setSelectedSection}
          />
          {selectedSection === 'About' && <AboutSection />}
          {selectedSection === 'Experience' && <ExperienceSection />}
          {/* {selectedSection === 'Blog' && <BlogSection />} */}
          {selectedSection === 'Projects' && <ProjectSection />}
          {selectedSection === 'Contact' && <ContactSection />}
        </div>
      </div>
    </div>
  );
}

export default App;
