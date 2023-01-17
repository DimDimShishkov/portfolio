import React from "react";
import "./Experience.css";

function Experience() {
  const [isVolTextOpen, toggleVoltextOpen] = React.useState(true);
  const [isBestOpen, toggleBestOpen] = React.useState(false);
  const [isBestTextOpen, toggleBestTextOpen] = React.useState(false);
  const [isOperaOpen, toggleOperaOpen] = React.useState(false);
  const [isOperaTextOpen, toggleOperaTextOpen] = React.useState(false);
  const [isGazOpen, toggleGazOpen] = React.useState(false);
  const [isGazTextOpen, toggleGazTextOpen] = React.useState(false);
  const [isTalgoOpen, toggleTalgoOpen] = React.useState(false);
  const [isTalgoTextOpen, toggleTalgoTextOpen] = React.useState(false);
  const [isYapOpen, toggleYapOpen] = React.useState(false);
  const [isYapTextOpen, toggleYapTextOpen] = React.useState(false);

  function openVol() {
    toggleVoltextOpen(true);
    toggleBestOpen(false);
    toggleBestTextOpen(false);
    toggleOperaOpen(false);
    toggleOperaTextOpen(false);
    toggleGazOpen(false);
    toggleGazTextOpen(false);
    toggleTalgoOpen(false);
    toggleTalgoTextOpen(false);
    toggleYapOpen(false);
    toggleYapTextOpen(false);
  }

  function openBest() {
    toggleVoltextOpen(false);
    toggleBestOpen(true);
    toggleBestTextOpen(true);
    toggleOperaOpen(false);
    toggleOperaTextOpen(false);
    toggleGazOpen(false);
    toggleGazTextOpen(false);
    toggleTalgoOpen(false);
    toggleTalgoTextOpen(false);
    toggleYapOpen(false);
    toggleYapTextOpen(false);
  }

  function openOpera() {
    toggleVoltextOpen(false);
    toggleBestOpen(true);
    toggleBestTextOpen(false);
    toggleOperaOpen(true);
    toggleOperaTextOpen(true);
    toggleGazOpen(false);
    toggleGazTextOpen(false);
    toggleTalgoOpen(false);
    toggleTalgoTextOpen(false);
    toggleYapOpen(false);
    toggleYapTextOpen(false);
  }

  function openGaz() {
    toggleVoltextOpen(false);
    toggleBestOpen(true);
    toggleBestTextOpen(false);
    toggleOperaOpen(true);
    toggleOperaTextOpen(false);
    toggleGazOpen(true);
    toggleGazTextOpen(true);
    toggleTalgoOpen(false);
    toggleTalgoTextOpen(false);
    toggleYapOpen(false);
    toggleYapTextOpen(false);
  }

  function openTalgo() {
    toggleVoltextOpen(false);
    toggleBestOpen(true);
    toggleBestTextOpen(false);
    toggleOperaOpen(true);
    toggleOperaTextOpen(false);
    toggleGazOpen(true);
    toggleGazTextOpen(false);
    toggleTalgoOpen(true);
    toggleTalgoTextOpen(true);
    toggleYapOpen(false);
    toggleYapTextOpen(false);
  }

  function openYap() {
    toggleVoltextOpen(false);
    toggleBestOpen(true);
    toggleBestTextOpen(false);
    toggleOperaOpen(true);
    toggleOperaTextOpen(false);
    toggleGazOpen(true);
    toggleGazTextOpen(false);
    toggleTalgoOpen(true);
    toggleTalgoTextOpen(false);
    toggleYapOpen(true);
    toggleYapTextOpen(true);
  }

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
                  <p className="experience__subtext">Январь 2022 - н.в.</p>
                </div>
              </div>

              <div className="experience__subtextcontainer">
                <p className="experience__maintext experience__desktop">
                  Яндекс.Практикум
                </p>
                <p className="experience__subtext experience__desktop">
                  Январь 2022 - н.в.
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
              <div
                className={`experience__point experience__point_active`}
                onClick={openVol}
              >
                <span
                  className="experience__span"
                  data-year="2012"
                  data-info="VolUral"
                ></span>
              </div>
              <div
                className={`experience__point ${
                  isBestOpen ? "experience__point_active" : ""
                }`}
                onClick={openBest}
              >
                <span
                  className="experience__span"
                  data-year="2013"
                  data-info="BEST"
                ></span>
              </div>
              <div
                className={`experience__point ${
                  isOperaOpen ? "experience__point_active" : ""
                }`}
                onClick={openOpera}
              >
                <span
                  className="experience__span"
                  data-year="2015"
                  data-info="UralOpera"
                ></span>
              </div>
              <div
                className={`experience__point ${
                  isGazOpen ? "experience__point_active" : ""
                }`}
                onClick={openGaz}
              >
                <span
                  className="experience__span"
                  data-year="2016"
                  data-info="ООО ГТЮ"
                ></span>
              </div>
              <div
                className={`experience__point ${
                  isTalgoOpen ? "experience__point_active" : ""
                }`}
                onClick={openTalgo}
              >
                <span
                  className="experience__span"
                  data-year="2018"
                  data-info="Talgo"
                ></span>
              </div>
              <div
                className={`experience__point ${
                  isYapOpen ? "experience__point_active" : ""
                }`}
                onClick={openYap}
              >
                <span
                  className="experience__span"
                  data-year="2022"
                  data-info="ЯП"
                ></span>
              </div>
            </div>

            <div className="experience__workcontainers">
              <div
                className={`experience__workcontainer ${
                  isVolTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">
                  Сентябрь 2012 - Июнь 2014
                </p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    "Волонтеры Урала" (VolUral), Екатеринбург
                  </p>
                  <p className="experience__worksubheading">Волонтер</p>
                  <ul className="experience__workpoints">
                    <li className="experience__workpoint">
                      Организация благотворительных поездок в&nbsp;детские дома.
                      Волонтерство на&nbsp;проекте Елка желаний (сбор
                      пожертвований для детских домов).
                    </li>
                    <li className="experience__workpoint">
                      Волонтерство на&nbsp;Универсиаде 2013&nbsp;г.
                      в&nbsp;Казани (волонтер PR-направления, сопровождение
                      федеральных и&nbsp;иностранных журналистов)
                    </li>
                  </ul>

                  <p className="experience__workpoint"></p>
                </div>
              </div>
              <div
                className={`experience__workcontainer ${
                  isBestTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">
                  Сентябрь 2013 – Июнь 2021
                </p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    Board of European Students of Technology, Екатеринбург
                  </p>
                  <p className="experience__worksubheading">PR-member</p>
                  <ul className="experience__workpoints">
                    <p className="experience__worktext">Обязанности:</p>
                    <li className="experience__workpoint">
                      Стратегическое планирование активностей организации.
                    </li>
                    <li className="experience__workpoint">
                      Организация образовательных курсов.
                    </li>
                    <li className="experience__workpoint">
                      Организация инженерных соревнований (European BEST
                      Engineering Competition).
                    </li>
                    <p className="experience__worktext">Достижения:</p>
                    <li className="experience__workpoint">
                      Как член core-team провел образовательный проект для
                      иностранных студентов с бюджетом более 500.000 руб.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`experience__workcontainer ${
                  isOperaTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">
                  Сентябрь 2015 - Январь 2016
                </p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    Театр оперы и балета, Екатеринбург
                  </p>
                  <p className="experience__worksubheading">
                    Инженер-энергетик
                  </p>
                  <ul className="experience__workpoints">
                    <p className="experience__worktext">Обязанности:</p>
                    <li className="experience__workpoint">
                      Поддержание исправного состояния оборудования и
                      обеспечение бесперебойной работы.
                    </li>
                    <li className="experience__workpoint">
                      Ведение оперативной и отчетной документации.
                    </li>
                    <li className="experience__workpoint">
                      Составление заявок на расходные материалы, списание
                      материалов.
                    </li>
                    <li className="experience__workpoint">
                      Организация технически правильной эксплуатации и
                      своевременный ремонт энергетического оборудования и
                      энергосистем.
                    </li>
                    <li className="experience__workpoint">
                      Контроль за рациональным расходованием энергетических
                      ресурсов в подразделениях, последовательное соблюдение
                      режима экономии.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`experience__workcontainer ${
                  isGazTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">Январь 2016 - Июль 2018</p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    Газпром трансгаз Югорск, п. Заполярный, ЯНАО
                  </p>
                  <p className="experience__worksubheading">
                    Инженер релейной защите и автоматике
                  </p>
                  <ul className="experience__workpoints">
                    <p className="experience__worktext">Обязанности:</p>
                    <li className="experience__workpoint">
                      Управление штатом из 8 электриков и 2 механиков.
                    </li>
                    <li className="experience__workpoint">
                      Контроль над исправностью работы 4 турбинных генераторов
                      ПАЭС-2500М и 7 дизель-генераторами.
                    </li>
                    <li className="experience__workpoint">
                      Пуско-наладка ЧРП ATV61 (настройка ПИДрегулятора) и ATV71
                      (уточнение закона управления двигателем), УПП Astat Plus
                      (настройка цепей управления и замена неисправного
                      вакуумного контактора).
                    </li>
                    <p className="experience__worktext">Достижения:</p>
                    <li className="experience__workpoint">
                      Благодарственные письма и грамота почетного газовика за
                      проведение работ.
                    </li>
                    <li className="experience__workpoint">
                      Состоял в команде молодежного комитета (направление
                      научная деятельность).
                    </li>
                    <li className="experience__workpoint">
                      5я группа по электробезопасности до и выше 1000В и
                      аттестация в области охраны труда и промышленной
                      безопасности
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`experience__workcontainer ${
                  isTalgoTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">
                  Июль 2018 - по&nbsp;настоящее время
                </p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    Patentes Talgo S.L. Филиал в России, Москва, м. Киевская
                  </p>
                  <p className="experience__worksubheading">
                    Инженер по техническому обслуживанию
                  </p>

                  <ul className="experience__workpoints">
                    <p className="experience__worktext">Обязанности:</p>
                    <li className="experience__workpoint">
                      Разработка, улучшение и внесение изменений в план
                      технического обслуживания и модернизация подижного
                      состава.
                    </li>
                    <li className="experience__workpoint">
                      Анализ логов с поиском неисправностей и замечаний при
                      проведении технического обслуживания (тормозная система,
                      система подачи сжатого воздуха, HMI, противопожарная
                      система, система защиты колес и система
                      кондиционирования).
                    </li>
                    <li className="experience__workpoint">
                      Подготовка отчетов, документации и обучение персонала для
                      клиента (ФПК).
                    </li>
                    <p className="experience__worktext">Достижения:</p>
                    <li className="experience__workpoint">
                      Разработка, планирование и организация более чем 15
                      модификаций.
                    </li>
                    <li className="experience__workpoint">
                      Тестирование и сертификация новой версии ПО систем
                      безопасности для подвижного состава.
                    </li>
                    <li className="experience__workpoint">
                      Оптимизация работы, путем внедрения макросов в Excel.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`experience__workcontainer ${
                  isYapTextOpen ? "experience__workcontainer_active" : ""
                }`}
              >
                <p className="experience__worktime">
                  Май 2022 - по&nbsp;настоящее время
                </p>
                <div className="experience__workbody">
                  <p className="experience__workheading">
                    Яндекс Практикум, Москва
                  </p>
                  <p className="experience__worksubheading">Старший студент</p>
                  <ul className="experience__workpoints">
                    <li className="experience__workpoint">
                      Ведение когорты студентов, ответы на вопросы по проектным
                      работам и тренажеру.
                    </li>
                    <li className="experience__workpoint">
                      Заполнение базы данных для передачи знаний последующим
                      старшим студентам.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
