import React, { useEffect, useMemo, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = ({
  articles = [],
  location,
  loggedIn,
  onLoginOpen,
  bookmarkBtnClick,
  savedUserCards,
}) => {
  const [countNews, setCountNews] = useState(3);

  useEffect(() => {
    location === '/' ? setCountNews(3) : setCountNews(articles.length);
  }, [articles, location]);

  const addMoreNews = () => {
    setCountNews(countNews + 3);
  };

  const disableMoreNewsBtn = useMemo(() => {
    return countNews >= articles.length ? 'newslist__button_hidden' : '';
  }, [countNews, articles]);

  return (
    <section className="newslist">
      <div
        className={
          location === '/'
            ? 'newslist__container'
            : 'newslist__container newslist__container_saved'
        }
      >
        <h2
          className={
            location === '/'
              ? 'newslist__title'
              : 'newslist__title newslist__title_hidden'
          }
        >
          Результаты поиска
        </h2>
        <ul className="newslist__list">
          {articles.slice(0, countNews).map((news, index) => (
            <li key={index} className="newslist__list-item">
              <NewsCard
                savedUserCards={savedUserCards}
                bookmarkBtnClick={bookmarkBtnClick}
                onLoginOpen={onLoginOpen}
                loggedIn={loggedIn}
                location={location}
                newsData={news}
                title={news.title}
                image={news.urlToImage || news.image}
                date={news.publishedAt || news.date}
                description={news.description || news.text}
                source={news.source.name || news.source}
                link={news.url || news.link}
                keyword={news.keyword}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={addMoreNews}
          className={
            location === '/'
              ? `newslist__button ${disableMoreNewsBtn}`
              : 'newslist__button newslist__button_hidden'
          }
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
};

export default NewsCardList;
