import React from 'react';
import './ProjectCard.css'; // Optional styling

const ProjectCard = ({ title, description, image, tech, android, ios }) => {
return (
    <div className="project-card">
        <img src={image} alt={`${title} screenshot`} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech Stack:</strong> {tech}</p>
        <div className="project-links">
            <p>
                live links - 
                {android && (
                    <>
                        {' '}
                        <a href={android} target="_blank" rel="noopener noreferrer">android</a>
                    </>
                )}
                {ios && (
                    <>
                        {' '}
                        <a href={ios} target="_blank" rel="noopener noreferrer">ios</a>
                    </>
                )}
            </p>
        </div>
    </div>
);
};

export default ProjectCard;
