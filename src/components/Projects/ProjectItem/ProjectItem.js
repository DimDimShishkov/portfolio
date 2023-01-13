import React from "react";
import "./ProjectItem.css";

function ProjectItem({ project, setCurrentProject }) {
  return (
    <div className="projects__item" onClick={() => setCurrentProject(project)}>
      {/* <img 
        src={project.img}
        alt={project.alt}
        loading="lazy"
        className="projects__image"
      /> */}
      <video width="100%" height="193" autoplay muted>
        <source src={project.img} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="projects__textcontainer">
        <div className="projects__texts">
          <h3 className="projects__title">{project.title}</h3>
          <div className="projects__tags">
            {project.tags.map((tag) => (
              <p className="projects__tag" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
