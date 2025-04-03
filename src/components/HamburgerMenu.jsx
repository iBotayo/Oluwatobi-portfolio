import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav-menu">
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
        </div>

        <ul className={`menu ${isOpen ? 'show' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamBurgerMenu;
