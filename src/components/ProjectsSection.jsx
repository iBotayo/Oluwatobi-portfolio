import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Portfolio Site',
      image: '',
      githubRepo: 'https://github.com',
      liveSite: 'https://oluwatobiomitogun.netlify.app',
    },
    {
      name: 'Movie app',
      image: '',
      githubRepo: 'https://github.com/iBotayo/Movies-App',
      liveSite: 'https://cettemovie.netlify.app',
    },
    {
      name: 'Social links',
      image: '',
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
          Here you will find some of the persona projects that I created{' '}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
