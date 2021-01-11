import React from 'react';
import NEWS from '../../data/news';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = () => {
  return (
    <section className="newslist">
      <div className={`newslist__container`}>
        {<h2 className="newslist__title">Результаты поиска</h2>}
        <ul className="newslist__list">
          {NEWS.map((news, index) => (
            <li key={index} className="newslist__list-item">
              <NewsCard
                title={news.title}
                image={news.urlToImage}
                date={news.publishedAt}
                description={news.description}
                source={news.source.name}
              />
            </li>
          ))}
        </ul>
        <button className="newslist__button">Показать ещё</button>
      </div>
    </section>
  );
};

export default NewsCardList;
