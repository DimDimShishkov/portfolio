import React from "react";
import "./Footer.css";

function Footer({ scrollToTop }) {
  return (
    <footer className="footer">
      <div className="footer__containers">
        <div className="footer__container">
          <h2 className="footer__heading">Контакты</h2>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <a
                href="mailto:d.shishkov.russia@gmail.com"
                className="footer__link"
              >
                d.shishkov.russia@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container">
          <h2 className="footer__heading">Соцсети</h2>
          <ul className="footer__socials">
            <li className="footer__contact">
              <a
                className="footer__link"
                target="_blank"
                href="https://telegram.me/dimdimshishkov"
                rel="noreferrer"
              >
                <i className="social__icon icon_tg"></i>
              </a>
            </li>
            <li className="footer__contact">
              <a
                className="footer__link"
                target="_blank"
                href="https://www.linkedin.com/in/dimdimshishkov"
                rel="noreferrer"
              >
                <i className="social__icon icon_ln"></i>
              </a>
            </li>

            <li className="footer__contact">
              <a
                className="footer__link"
                target="_blank"
                href="https://github.com/DimDimShishkov"
                rel="noreferrer"
              >
                <i className="social__icon icon_gh"></i>
              </a>
            </li>
            <li className="footer__contact">
              <a
                className="footer__link"
                target="_blank"
                href="https://career.habr.com/dimshishkov"
                rel="noreferrer"
              >
                <i className="social__icon icon_habr"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="footer__button" onClick={scrollToTop}>
        <span className="footer__arrow" />
      </button>
    </footer>
  );
}
export default Footer;
