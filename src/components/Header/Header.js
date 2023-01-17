import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

export const Header = ({ setPageBlock }) => {
  const [isMenuOpen, toggleMenuOpen] = React.useState(false);

  function handleSetPageBlock() {
    toggleMenuOpen(!isMenuOpen);
    setPageBlock(!isMenuOpen);
  }

  const handleOpenNewPage = () => {
    if (isMenuOpen) {
      toggleMenuOpen(!isMenuOpen);
      setPageBlock(!isMenuOpen);
    }
  };

  return (
    <header className="header">
      <div className="header__containers">
        <div className="header__headlink">
          <Link
            className="header__link"
            activeClass="header__link_active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleOpenNewPage()}
          >
            обо мне
          </Link>
        </div>

        <div
          onClick={handleSetPageBlock}
          className={`header__mobile ${
            isMenuOpen ? "header__mobile_active" : ""
          }`}
        />

        <div
          className={`header__items ${
            isMenuOpen ? "header__items_selected" : ""
          }`}
        >
          <Link
            className="header__link"
            activeClass="header__link_active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleOpenNewPage()}
          >
            проекты
          </Link>
          <Link
            className="header__link"
            activeClass="header__link_active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleOpenNewPage()}
          >
            опыт
          </Link>
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
          onClick={handleSetPageBlock}
        ></div>
      </div>
    </header>
  );
};
