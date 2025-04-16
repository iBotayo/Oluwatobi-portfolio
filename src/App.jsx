import React from 'react';
import './App.css'

import HamburgerMenu from './components/HamburgerMenu';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <>
       
        <header className="navBar" id='navbar'>
          <a href="#home" className='header'>
          <img src="/src/assets/Dp1.jpg" alt="Profile Image" />
          <h2>OLUWATOBI O.</h2>
          </a>

          <HamburgerMenu />
        </header>

      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App