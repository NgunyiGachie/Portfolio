import React from "react";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <h3>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};
