import React from 'react'
import './css/HeroSection.css'
import character from '../assets/character.png'
function HeroSection() {
  return (
    <div className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-description">
        Showcase your skills, projects, and achievements here.
      </p>
      <button className="hero-button">Get Started</button>
    </div>
    <img className='hero-image' src={character} alt="" />
  </div>
  )
}

export default HeroSection