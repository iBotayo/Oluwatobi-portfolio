import React from 'react';
import './HeroSection.css';
import SocialLinks from './SocialLinks';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="hero" id='home'>
      <div className="social-icons">
        <SocialLinks
          color="#e0dddd"
          iconSize="35px"
          gap="20px"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backGround: 'green',
          }}
          hoverStyle={{
            ':hover': { color: '#cf7ce6', transform: 'scale(1.2)' },
          }}
        />
      </div>
      <div className="hero-txt">
        <h1 className='hero-head'>HEY, I'M OLUWATOBI OMITOGUN</h1>
        <p className='hero-body'>A Result-Oriented Frontend Developer based in Lagos, Nigeria.</p>

        <Button name='PROJECTS' link='#projects' />
      </div>
    </div>
  );
};

export default HeroSection;
