import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
