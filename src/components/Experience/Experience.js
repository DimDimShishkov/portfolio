import React from "react";
import "./Experience.css";
import experienceArr from "./experienceArr.json";

function Experience() {
  const [currExpText, setCurrExpText] = React.useState(0);
  const [expArr, setExpArr] = React.useState(
    experienceArr.reduce(
      (prev, curr, ind) => [...prev, { id: ind, isSelected: ind === 0 }],
      []
    )
  );

  const openSection = (v) => {
    const newArr = expArr.map((item) => {
      return { ...item, isSelected: item.id <= v };
    });
    setCurrExpText(v);
    setExpArr(newArr);
  };

  return (
    <section className="experience">
      <div className="experience__header">
        <h2 className="experience__heading">обучение и опыт</h2>
      </div>

      <div className="experience__body">
        <div className="experience__items">
          <div className="experience__container">
            <h2 className="experience__subheading">Высшее образование</h2>
            <div className="experience__subcontainer">
              <div className="experience__iconcontainer">
                <i className="experience__icon icon__ufru" />
                <div className="experience__icontext experience__mobile">
                  <p className="experience__maintext">
                    УрФУ им. первого Президента России Б.Н. Ельцина
                  </p>
                  <p className="experience__subtext">2010 — 2015</p>
                </div>
              </div>

              <div className="experience__subtextcontainer">
                <p className="experience__maintext experience__desktop">
                  Уральский Федеральный Университет им. первого Президента
                  России Б.Н. Ельцина
                </p>
                <p className="experience__subtext experience__desktop">
                  2010 — 2015
                </p>
                <p className="experience__text">
                  Кафедра «Электропривод и автоматика промышленных установок и
                  технологических комплексов»
                </p>
              </div>
            </div>
          </div>

          <div className="experience__container">
            <h2 className="experience__subheading">Образовательные курсы</h2>
            <div className="experience__subcontainer">
              <div className="experience__iconcontainer">
                <i className="experience__icon icon__yapr" />
                <div className="experience__icontext experience__mobile">
                  <p className="experience__maintext">Яндекс.Практикум</p>
                  <p className="experience__subtext">Январь - Сентябрь 2022</p>
                </div>
              </div>

              <div className="experience__subtextcontainer">
                <p className="experience__maintext experience__desktop">
                  Яндекс.Практикум
                </p>
                <p className="experience__subtext experience__desktop">
                  Январь - Сентябрь 2022
                </p>
                <p className="experience__text">Факультет “Веб-разработчик”</p>
              </div>
            </div>
            <div className="experience__subcontainer">
              <div className="experience__subtextcontainer">
                <p className="experience__maintext experience__desktop">
                  Glo.academy
                </p>
                <p className="experience__subtext experience__desktop">
                  Июнь 2022
                </p>
                <p className="experience__text">
                  Курс: JavaScript, Свой Авито на HTML и CSS
                </p>
              </div>

              <div className="experience__iconcontainer">
                <i className="experience__icon icon__glo" />
                <div className="experience__icontext experience__mobile">
                  <p className="experience__maintext">Glo.academy</p>
                  <p className="experience__subtext">Июнь 2022</p>
                </div>
              </div>
            </div>
            <div className="experience__subcontainer">
              <div className="experience__iconcontainer">
                <i className="experience__icon icon__hexlet" />
                <div className="experience__icontext experience__mobile">
                  <p className="experience__maintext">Хекслет</p>
                  <p className="experience__subtext">Май 2022</p>
                </div>
              </div>

              <div className="experience__subtextcontainer">
                <p className="experience__maintext experience__desktop">
                  Хекслет
                </p>
                <p className="experience__subtext experience__desktop">
                  Май 2022
                </p>
                <p className="experience__text">
                  Курсы: Основы языка JavaScript, Введение в Git, JS:
                  Предметно-ориентированное проектирование, ООП в JS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience__timelinecontainer">
          <h2 className="experience__subheading">Опыт работы</h2>

          <div className="experience__timeline">
            <div className="experience__points">
              {experienceArr.map((item, ind) => (
                <div
                  className={`experience__point ${
                    expArr[ind].isSelected ? "experience__point_active" : ""
                  }`}
                  onClick={() => openSection(ind)}
                  key={ind}
                >
                  <span
                    className="experience__span"
                    data-year={item.year}
                    data-info={item.shortName}
                  ></span>
                </div>
              ))}
            </div>

            <div className="experience__workcontainers">
              {experienceArr.map((item, ind) => (
                <div
                  className={`experience__workcontainer ${
                    ind === currExpText
                      ? "experience__workcontainer_active"
                      : ""
                  }`}
                  key={ind}
                >
                  <p className="experience__worktime">{item.date}</p>
                  <div className="experience__workbody">
                    <p className="experience__workheading">{item.heading}</p>
                    <p className="experience__worksubheading">
                      {item.subheading}
                    </p>

                    <ul className="experience__workpoints">
                      {item.respText && (
                        <p className="experience__worktext">{item.respText}</p>
                      )}
                      {item.respText1 && (
                        <li className="experience__workpoint">
                          {item.respText1}
                        </li>
                      )}
                      {item.respText2 && (
                        <li className="experience__workpoint">
                          {item.respText2}
                        </li>
                      )}
                      {item.respText3 && (
                        <li className="experience__workpoint">
                          {item.respText3}
                        </li>
                      )}

                      {item.achieve && (
                        <p className="experience__worktext">{item.achieve}</p>
                      )}
                      {item.achieveText1 && (
                        <li className="experience__workpoint">
                          {item.achieveText1}
                        </li>
                      )}
                      {item.achieveText2 && (
                        <li className="experience__workpoint">
                          {item.achieveText2}
                        </li>
                      )}
                      {item.achieveText3 && (
                        <li className="experience__workpoint">
                          {item.achieveText3}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
