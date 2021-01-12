import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as BookmarkIcon } from '../../images/bookmark.svg';
import { ReactComponent as DeleteIcon } from '../../images/trash.svg';
import './NewsCard.css';
const NewsCard = ({
  location,
  title,
  image,
  date,
  description,
  source,
  tag,
}) => {
  const convertDate = (newsDate) => {
    const publishDate = new Date(newsDate);
    return `${publishDate.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
    })}, ${publishDate.getFullYear()}`;
  };

  const [heightTitle, setHeightTitle] = useState(0);
  const titleRef = useRef();

  useEffect(() => {
    setHeightTitle(titleRef.current.offsetHeight);
  }, []);

  const setClamp = (hight) => {
    if (window.innerWidth <= 500) {
      if (hight > 60) return { WebkitLineClamp: '2' };
      if (hight > 40) return { WebkitLineClamp: '4' };
    }
    if (hight <= 29) return { WebkitLineClamp: '6' };
    if (hight > 60) return { WebkitLineClamp: '4' };
    return { WebkitLineClamp: '5' };
  };

  return (
    <div className="newscard">
      <div className="newscard__button">
        {location === '/' ? (
          <>
            <BookmarkIcon className="newscard__button-icon newscard__button-icon_bookmark" />
            <div className="newscard__help">
              Войдите, чтобы сохранять статьи
            </div>
          </>
        ) : (
          <>
            <DeleteIcon className="newscard__button-icon newscard__button-icon_delete" />
            <div className="newscard__help newscard__help_saved">{tag}</div>
          </>
        )}
      </div>
      <img className="newscard__image" src={image} alt={title}></img>
      <div className="newscard__content">
        <p className="newscard__date">{convertDate(date)}</p>
        <h3 ref={titleRef} className="newscard__title">
          {title}
        </h3>
        <p style={setClamp(heightTitle)} className="newscard__description">
          {description}
        </p>
        <p className="newscard__source-name">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
