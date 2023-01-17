import React from "react";
// import { useForm } from "react-hook-form";
import "./Feedback.css";

export function Feedback() {
  /*   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data); */

  return (
    <section className="feedback">
      <div className="feedback__header">
        <h2 className="feedback__heading">связаться со мной</h2>
      </div>

      <div className="feedback__body">
        {/* <form onSubmit={handleSubmit(onSubmit)} className="feedback__form">
          <div className="form__header">
            <input
              placeholder="имя"
              {...register("name")}
              className="form__input"
            />
            <input
              placeholder="email"
              {...register("email")}
              className="form__input"
            />
          </div>
          <input
            placeholder="тема письма"
            {...register("subject")}
            className="form__text-input"
          />

          <input
            placeholder="текст письма"
            {...register("message", { required: true })}
            className="form__text-input"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <button className="form__submit" type="submit">
            Отправить
          </button>
        </form> */}
        <p className="feedback__text">
          Сейчас я&nbsp;активно ищу интересные проекты и&nbsp;готов включиться
          в&nbsp;работу!
        </p>
        <p className="feedback__text">
          Если остались вопросы или просто хотите сказать привет, напишите мне в{" "}
          <a
            className="feedback__link"
            target="_blank"
            href="https://telegram.me/dimdimshishkov"
            rel="noreferrer"
          >
            телеграмм
          </a>{" "}
          или можем установить контакт в{" "}
          <a
            className="feedback__link"
            target="_blank"
            href="https://www.linkedin.com/in/dimdimshishkov"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
