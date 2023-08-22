import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={
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
                  } />
                   <Route path="/*" element={<NotFound />} />
              </Routes>
            
    </BrowserRouter>
  )
}

export default App
