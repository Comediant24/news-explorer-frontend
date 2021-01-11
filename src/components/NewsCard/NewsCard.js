import React from 'react';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';
import './NewsCard.css';
const NewsCard = ({ title, image, date, description, source }) => {
  const convertDate = (newsDate) => {
    const publishDate = new Date(newsDate);
    return `${publishDate.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
    })}, ${publishDate.getFullYear()}`;
  };

  return (
    <div className="newscard">
      <div className="newscard__button">
        <Bookmark className="newscard__button-icon newscard__button-icon_bookmark" />
        <div className="newscard__help">Войдите, чтобы сохранять статьи</div>
      </div>
      <img className="newscard__image" src={image} alt={title}></img>
      <div className="newscard__content">
        <p className="newscard__date">{convertDate(date)}</p>
        <h3 className="newscard__title">{title}</h3>
        <p className="newscard__description">{description}</p>
        <p className="newscard__source-name">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
