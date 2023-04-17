import React from "react";
import "./Main.css";
import ava from "./../../images/avatar.png";

function Main() {
  return (
    <section className="main">
      <div className="main__containers">
        <div className="main__container">
          <h2 className="main__heading">Привет, Я&nbsp;Дима.</h2>
          <p className="main__title">Frontend разработчик, 29 лет</p>
          <p className="main__description">
            Родился в Башкирии, получил высшее образование в Екатеринбурге.
            Первое место работы было за 14км от полярного круга в поселке
            Заполярный. Очень люблю путешествовать и увлекаюсь бегом. В 2022
            прошёл курс по веб-разработке от Яндекс.Практикум, получил диплом
            (средний балл по 3 этапам составляет 99,6%) и сейчас ищу интересные
            проекты.
          </p>

          <ul className="main__items">
            <li className="main__description">E-mail:</li>
            <li className="main__description">
              <a
                href="mailto:d.shishkov.russia@gmail.com"
                className="main__link"
              >
                d.shishkov.russia@gmail.com
              </a>
            </li>
            <li className="main__description">Соцсети:</li>
            <li className="main__description">
              <a
                className="main__link"
                target="_blank"
                href="https://www.linkedin.com/in/dimdimshishkov"
                rel="noreferrer"
              >
                linkedin.com/in/dimdimshishkov
              </a>
            </li>
            <li className="main__description">Telegram</li>
            <li className="main__description">
              <a
                className="main__link"
                target="_blank"
                href="https://telegram.me/dimdimshishkov"
                rel="noreferrer"
              >
                @dimdimshishkov
              </a>
            </li>
            <li className="main__description">Проживает:</li>
            <li className="main__description">Москва, Россия</li>
            <li className="main__description">Языки:</li>
            <li className="main__description">
              English B2: Upper-intermediate,
            </li>
            <li className="main__description"></li>
            <li className="main__description">Español А2: Nivel Basico 2</li>
            <li className="main__description">Стек:</li>
            <li className="main__description">
              React, Webpack, Redux, Angular, JavaScript и TypeScript, Node.js и
              Express.js, HTML, CSS и SaSS, Git и mongoDB.
            </li>
          </ul>
        </div>
        <div className="main__container">
          <img src={ava} alt="ShishkovDimDim" className="main__ava"></img>
        </div>
      </div>
    </section>
  );
}

export default Main;
