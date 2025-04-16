import React from 'react';
import './ProjectsSection.css';
import Button from './Button';

import portfolio from '../assets/Portfolio.png';
import cettemovieImg from '../assets/cettemovie-img.png';
import socialLinksImg from '../assets/socialLinks-img.png';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Portfolio Site',
      image: portfolio,
      description:
        'I created this portfolio website, using ReactJs, for my personal online visibility.',
      githubRepo: 'https://github.com/iBotayo/Oluwatobi-portfolio',
      liveSite: 'https://oluwatobiomitogun.netlify.app',
    },
    {
      name: 'Cette Movie App',
      image: cettemovieImg,
      description:
        'Cette Movie is a website that help to search for latest movies, displays top five most searched movies and is built using ReactJs, TMDB API and Appwrite for backend.',
      githubRepo: 'https://github.com/iBotayo/Movies-App',
      liveSite: 'https://cettemovie.netlify.app',
    },
    {
      name: 'Social links App',
      image: socialLinksImg,
      description:
        'I created this from a Frontendmentor challenge, built with just HTML and CSS, it show links to major social media.',
      githubRepo: 'https://github.com/iBotayo/social-links-profile-main',
      liveSite: 'https://oluwatobisocials.netlify.app',
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="project-intro">
        <h3>
          PROJECTS <br /> <span className="underline"></span>
        </h3>
        <p className="project-text">
          Here you will find some of the personal projects that I created{' '}
        </p>
      </div>

      <div className="project-list">
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="details">
                <h4 className="project-name">{project.name}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="buttons">
                  <Button name="GitHub" link={project.githubRepo} target='_blank' />
                  <Button name="Live Demo" link={project.liveSite} target='_blank' />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsSection;
