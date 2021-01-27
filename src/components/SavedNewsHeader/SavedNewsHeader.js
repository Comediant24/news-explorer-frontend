import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ userArticles }) => {
  const [countArticles, setcountArticles] = useState(0);
  const [tags, setTags] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  const configWords = [
    'сохраненная статья',
    'сохраненные статьи',
    'сохраненных статей',
  ];

  const declOfNum = (titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      countArticles % 100 > 4 && countArticles % 100 < 20
        ? 2
        : cases[countArticles % 10 < 5 ? countArticles % 10 : 5]
    ];
  };

  useEffect(() => {
    setcountArticles(userArticles.length);
    setTags(countKeywordsTag());
  }, [userArticles]);

  const countKeywordsTag = () => {
    const keyCount = userArticles.reduce((sum, news) => {
      sum[news.keyword] = (sum[news.keyword] || 0) + 1;
      return sum;
    }, {});
    return Object.keys(keyCount).sort((a, b) => keyCount[b] - keyCount[a]);
  };

  const keywordsTag =
    tags.length <= 3
      ? tags.join(', ')
      : `${tags.slice(0, 2).join(', ')} и ${tags.length - 2}-м другим`;

  return (
    <section className="savedheader">
      <div className="savedheader__container">
        <p className="savedheader__description">Сохранённые статьи</p>
        <h1 className="savedheader__title">
          {`${currentUser.name}, у вас ${
            countArticles === 0
              ? 'нет сохранённых статей'
              : `${countArticles} ${declOfNum(configWords)}`
          } `}
        </h1>
        <p
          className={`savedheader__tag-list ${
            countArticles === 0 ? 'savedheader__tag-list_hidden' : ''
          }`}
        >
          По ключевым словам:
          <span className="savedheader__tag"> {keywordsTag}</span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
