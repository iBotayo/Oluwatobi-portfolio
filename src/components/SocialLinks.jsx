import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = ({
  style,
  iconSize = '24px',
  color = '#333',
  gap = '15px',
  hoverStyle,
}) => {
  const socialMedia = [
    { name: 'GitHub', url: 'https://github.com/ibotayo', icon: faGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: faLinkedin },
    { name: 'Twitter', url: 'https://twitter.com/O_ibot', icon: faTwitter },
    { name: 'Instagram', url: 'https://instagram.com', icon: faInstagram },
  ];

  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        gap: gap,
        ...style, // Custom styles passed from props
      }}
    >
      {socialMedia.map((social, index) => (
        <li key={index}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: color,
              fontSize: iconSize,
              transition: 'all 0.3s ease',
              ...hoverStyle,
              background: 'green',
              padding: '0px 5px'
            }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
