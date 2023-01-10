import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./Projects.css";
import projectsArr from "./projectsArr.json";

function Projects({ setCurrentProject }) {
  return (
    <section className="projects">
      <div className="projects__header">
        <div className="projects__container">
          <h1 className="projects__heading">портфолио.</h1>
          <h2 className="projects__subheading">
            Мои большие проекты и скромные работы для усвоения навыков
          </h2>
        </div>
      </div>

      <div className="projects__body">
        <div className="projects__items">
          {projectsArr?.map((project) => (
            <ProjectItem
              project={project}
              key={project.alt}
              setCurrentProject={setCurrentProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
