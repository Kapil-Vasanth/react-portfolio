import React from 'react'
import './css/HeroSection.css'
import character from '../assets/character.png'
function HeroSection() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-section" id='home'>
    <div className="hero-content">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-description">
        In this section of my portfolio, I'm thrilled to highlight the diverse range of talents and expertise I possess. From technical proficiency to creative problem-solving, I have honed an array of skills that enable me to excel in various domains.
      </p>
      <button className="hero-button" onClick={() => {scrollToSection('about')}}>Read More</button>
    </div>
    <img className='hero-image' src={character} alt="" />
  </div>
  )
}

export default HeroSection