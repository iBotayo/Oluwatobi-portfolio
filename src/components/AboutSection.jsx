import React from 'react';
import './AboutSection.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  const skills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Git', icon: faGit },
    { name: 'GitHub', icon: faGithub },
  ];
  return (
    <div className="about" id="about">
      <h3>ABOUT ME
      <span className="underline"></span>
      </h3>
      
      <p className='about-text'>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>

      <div className="content">
        <div className="know-me">
          <h4>Get to know me!</h4>
          <p>
            I'm a <span>Frontend Focused Web Developer</span> building and
            managing the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Chect out some of my work in
            the <span>Projects</span> section. </p>
            <p>I'm open to <span>Job</span>{' '}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to <span>contact</span> me.
          </p>
          <Button name="CONTACT" link="#contact" />
        </div>

        <div className="skills">
          <h4>My Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={skill.icon} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
