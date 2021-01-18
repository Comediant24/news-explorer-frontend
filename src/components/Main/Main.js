import React, { useEffect, useState } from 'react';
import { getNews } from '../../utils/NewsAPI';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFoundNews from '../NotFoundNews/NotFoundNews';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

const Main = ({ location }) => {
  const [articlesNews, setArticlesNews] = useState([]);
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [isNotFoundShow, setNotFoundShow] = useState(false);

  useEffect(() => {
    setArticlesNews(JSON.parse(localStorage.getItem('articles')));
  }, []);

  const getArticlesNews = (keyword) => {
    setNotFoundShow(false);
    setPreloaderShow(true);
    getNews(keyword)
      .then((articles) => {
        if (articles.articles.length === 0) return setNotFoundShow(true);
        setArticlesNews(articles.articles);
        localStorage.setItem('articles', JSON.stringify(articles.articles));
      })
      .finally(() => {
        setPreloaderShow(false);
      });
  };
  return (
    <main className="main">
      <SearchForm getArticlesNews={getArticlesNews} />
      <Preloader isShow={isPreloaderShow} />
      {articlesNews.length > 0 ? (
        <NewsCardList articles={articlesNews} location={location} />
      ) : (
        <></>
      )}
      {isNotFoundShow ? <NotFoundNews /> : <></>}
      <About />
    </main>
  );
};

export default Main;
