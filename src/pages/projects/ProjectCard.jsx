import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";

const ProjectCard = ({ image, title, description, tech, github, website }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-badge">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="icon" /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
