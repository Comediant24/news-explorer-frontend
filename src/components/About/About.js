import React from 'react';
import './About.css';
import author from '../../images/author.png';
const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__image"
          src={author}
          alt="Фотография автора"
        ></img>
        <div className="about__wrapper">
          <h4 className="about__tite">Об авторе</h4>
          <p className="about__description">
            Меня зовут Юрий, и я начинающий фронтендер. В январе 2021 я закончил
            курсы по веб разработке от Яндекс.Практикум и теперь ищу новые
            вызовы для себя!
          </p>
          <p className="about__description">
            За время обучения научился верстать адаптивные интерфейсы, владею
            знаниями js на уровне lear.javascript Часть 1 разделы 1-11, часть 2
            разделы 1-4 и выборочно 3 часть, знаю React и его хуки, умею
            собирать JS webpack’ом, знаю Rest и его принципы. Кроме задач курса
            самостоятельно освоил SASS, Redux, Styled Components и владею 5 kyu
            на codewars. Верстал одностраничники, адаптивы, портал с
            регистрацией и маршрутизацией и даже сделал для него бекенд на
            Exspress и MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
