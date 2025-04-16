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
            <a href="#home" onClick={() => setIsOpen(false)}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamBurgerMenu;
