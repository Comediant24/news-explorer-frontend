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
            Это блок с описанием автора проекта. Здесь следует указать, как вас
            зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          </p>
          <p className="about__description">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут
            научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
