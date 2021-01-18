import React, { useMemo, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = ({ articles, location }) => {
  const [countNews, setCountNews] = useState(3);

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
                onClickUrl={news.url}
                location={location}
                title={news.title}
                image={news.urlToImage}
                date={news.publishedAt}
                description={news.description}
                source={news.source.name}
                tag={news.key}
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
