import React from 'react';
import { ReactComponent as NotFoundImage } from '../../images/not-found.svg';
import './NotFoundNews.css';

const NotFoundNews = () => {
  return (
    <section className="notfoundnews">
      <div className="notfoundnews__container">
        <NotFoundImage className="notfoundnews__image-icon" />
        <h4 className="notfoundnews__title">Ничего не найдено</h4>
        <p className="notfoundnews__subtitle">
          К сожалению по вашему запросу ничего не найдено
        </p>
      </div>
    </section>
  );
};

export default NotFoundNews;
