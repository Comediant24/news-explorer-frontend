import React from 'react';
import NEWS from '../../data/news';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = ({ location }) => {
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
          {NEWS.map((news, index) => (
            <li key={index} className="newslist__list-item">
              <NewsCard
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
          className={
            location === '/'
              ? 'newslist__button'
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
