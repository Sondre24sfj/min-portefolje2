import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-logo" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

