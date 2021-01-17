import React from 'react';
import { Link } from 'react-router-dom';
import git from '../../images/git.svg';
import linkedin from '../../images/linkedin.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; 2020 Supersite, Powered by News API
        </p>
        <div className="footer__wrapper">
          <div className="footer__links">
            <Link className="footer__link" to="/">
              Главная
            </Link>
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </div>
          <div className="footer__links footer__links_social">
            <a
              className="footer__link"
              href="https://github.com/Comediant24/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__social-icon"
                src={git}
                alt="Ссылка на GitHub"
              ></img>
            </a>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/yuri-bairamukov-00258418b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__social-icon"
                src={linkedin}
                alt="Ссылка на Linkedin"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
