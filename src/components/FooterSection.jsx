import React from 'react';
import './FooterSection.css';
import SocialLinks from './SocialLinks';

const FooterSection = () => {
  return (
    <div className="footer">
      <div className="footer-note">
        <div className="socials">
          <h4>SOCIAL</h4>
          <SocialLinks color="#e0dddd" iconSize="25px" gap="20px" />
        </div>
        <div className="footer-info">
          <h4>OLUWATOBI OMITOGUN</h4>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>
      <span className="horizontal-line"></span>
      <span className="copyright">
        &copy;Copyright 2025. Made by{' '}
        <a href="https://oluwatobiomitogun.netlify.app">Oluwatobi Omitogun</a>
      </span>
    </div>
  );
};

export default FooterSection;
