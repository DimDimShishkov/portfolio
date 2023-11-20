import React from "react";
import Popup from "../Popup";
import "./PopupProject.css";

export function PopupProject({ project, onClose }) {
  return (
    <Popup onClose={onClose}>
      <h2 className="popup__title">
        Название: <span className="popup__text">{project.title}</span>
      </h2>
      <div className="popup__items">
        <img src={project.img} alt={project.alt} className="popup__image" />
        <div className="popup__item">
          <p className="popup__subtitle">
            Описание: <span className="popup__text">{project.subtitle}</span>
          </p>
          <p className="popup__description">
            Ссылки:{" "}
            <span className="popup__text">
              {project.linkGitHib !== "NDA" ? (
                <a
                  className="popup__link"
                  href={project.linkGitHib}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <>NDA</>
              )}{" "}
              {project.linkProject !== "NDA" ? (
                <a
                  className="popup__link"
                  href={project.linkProject}
                  target="_blank"
                  rel="noreferrer"
                >
                  Проект
                </a>
              ) : (
                <>NDA</>
              )}
            </span>
          </p>
        </div>
      </div>
      <p className="popup__description">
        Используемые технологии:{" "}
        {project.tags.map((tag) => (
          <span className="popup__tag" key={tag}>
            {tag}
          </span>
        ))}
      </p>
    </Popup>
  );
}
