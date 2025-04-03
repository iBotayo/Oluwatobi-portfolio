import React from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import './App.css'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  return (
    <>
       
        <header className="navBar" id='navbar'>
          <a href="#navbar" className='header'>
          <img src="/src/assets/Dp1.jpg" alt="Profile Image" />
          <h2>Oluwatobi O.</h2>
          </a>

          <HamburgerMenu />
        </header>
      
      
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}

export default App