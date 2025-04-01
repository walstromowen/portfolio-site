import { useState, useRef} from 'react'
import { Header } from './components/Header'
import { AboutTab } from './components/AboutTab'
import { ProjectsTab } from './components/ProjectsTab'
import { SkillsTab } from './components/SkillsTabs'
import { Footer } from './components/Footer'


function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className='background-image-container'>
        <Header aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef}/>
        <AboutTab aboutRef={aboutRef}/>
      </div>
      <ProjectsTab projectsRef={projectsRef}/>
      <SkillsTab skillsRef={skillsRef}/>
      <Footer contactRef={contactRef}/>
    </>
  )
}

export default App
