import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
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
  const [clamp, setClamp] = useState(4);
  const [heightTitle, setHeightTitle] = useState(0);
  const windowSize = useWindowSize();
  const titleRef = useRef();

  useEffect(() => {
    setHeightTitle(titleRef.current.offsetHeight);
    if (windowSize <= 550) {
      if (heightTitle > 52) return setClamp(2);
      return setClamp(4);
    }
    if (heightTitle <= 30) return setClamp(6);
    if (heightTitle > 60) return setClamp(4);
    return setClamp(5);
  }, [windowSize, heightTitle]);

  const convertDate = (newsDate) => {
    const publishDate = new Date(newsDate);
    return `${publishDate.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
    })}, ${publishDate.getFullYear()}`;
  };
  console.log({ clamp, heightTitle });

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
        <p style={{ WebkitLineClamp: clamp }} className="newscard__description">
          {description}
        </p>
        <p className="newscard__source-name">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
