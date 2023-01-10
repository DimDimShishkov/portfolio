import React from "react";
import "./Header.css";

export const Header = ({
  setIsStartPage,
  setIsProjectPage,
  setIsExpPage,
  setIsSandboxPage,
}) => {
  const [isStartPage, setStartPage] = React.useState(true);
  const [isProjectPage, setProjectPage] = React.useState(false);
  const [isExpPage, setExpPage] = React.useState(false);
  const [isSandboxPage, setSandboxPage] = React.useState(false);

  const [isMenuOpen, toggleMenuOpen] = React.useState(false);
  function openMobileMenu() {
    toggleMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  const handleOpenNewPage = (e) => {
    let currentPage = e.target.name;
    switch (currentPage) {
      case "start":
        setStartPage(true);
        setIsStartPage(true);
        setProjectPage(false);
        setIsProjectPage(false);
        setExpPage(false);
        setIsExpPage(false);
        setSandboxPage(false);
        setIsSandboxPage(false);
        break;
      case "exp":
        setStartPage(false);
        setIsStartPage(false);
        setProjectPage(false);
        setIsProjectPage(false);
        setExpPage(true);
        setIsExpPage(true);
        setSandboxPage(false);
        setIsSandboxPage(false);
        break;
      case "project":
        setStartPage(false);
        setIsStartPage(false);
        setProjectPage(true);
        setIsProjectPage(true);
        setExpPage(false);
        setIsExpPage(false);
        setSandboxPage(false);
        setIsSandboxPage(false);
        break;
      case "sandbox":
        setStartPage(false);
        setIsStartPage(false);
        setProjectPage(false);
        setIsProjectPage(false);
        setExpPage(false);
        setIsExpPage(false);
        setSandboxPage(true);
        setIsSandboxPage(true);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="header">
      <div className="header__containers">
        <div className="header__headlink">
          <button
            className={`header__link ${isStartPage && "header__link_active"}`}
            onClick={(e) => handleOpenNewPage(e)}
            name="start"
          >
            Обо мне
          </button>
        </div>
        <div className="header__mobile" onClick={openMobileMenu}>
          <span
            className={`header__span ${
              isMenuOpen ? "header__span_selected" : ""
            }`}
          ></span>
        </div>
        <div
          className={`header__items ${
            isMenuOpen ? "header__items_selected" : ""
          }`}
        >
          <button
            className={`header__link ${isExpPage && "header__link_active"}`}
            onClick={(e) => handleOpenNewPage(e)}
            name="exp"
          >
            опыт
          </button>
          <button
            className={`header__link ${isProjectPage && "header__link_active"}`}
            onClick={(e) => handleOpenNewPage(e)}
            name="project"
          >
            проекты
          </button>
          <button
            className={`header__link ${isSandboxPage && "header__link_active"}`}
            onClick={(e) => handleOpenNewPage(e)}
            name="sandbox"
          >
            песочница
          </button>
          <a
            href="https://github.com/DimDimShishkov"
            target="_blank"
            className="header__link"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div
          className={`header__overlay ${
            isMenuOpen ? "header__overlay_selected" : ""
          }`}
          onClick={openMobileMenu}
        ></div>
      </div>
    </nav>
  );
};
