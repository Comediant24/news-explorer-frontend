import React, { useEffect, useState } from 'react';
import { getNews } from '../../utils/NewsApi';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFoundNews from '../NotFoundNews/NotFoundNews';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

const Main = ({
  location,
  loggedIn,
  onLoginOpen,
  bookmarkBtnClick,
  savedUserCards,
}) => {
  const [articlesNews, setArticlesNews] = useState([]);
  const [isPreloaderShow, setPreloaderShow] = useState(false);
  const [isNotFoundShow, setNotFoundShow] = useState(false);

  useEffect(() => {
    const lastRequest = localStorage.getItem('articles');
    if (lastRequest) {
      setArticlesNews(JSON.parse(lastRequest));
    }
  }, []);

  const getArticlesNews = (keyword) => {
    setArticlesNews([]);
    setNotFoundShow(false);
    setPreloaderShow(true);
    getNews(keyword)
      .then((articles) => {
        if (articles.articles.length === 0) return setNotFoundShow(true);
        const newsCards = articles.articles.map((c) => ({ ...c, keyword }));
        setArticlesNews(newsCards);
        localStorage.setItem('articles', JSON.stringify(newsCards));
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
        <NewsCardList
          savedUserCards={savedUserCards}
          onLoginOpen={onLoginOpen}
          articles={articlesNews}
          location={location}
          loggedIn={loggedIn}
          bookmarkBtnClick={bookmarkBtnClick}
        />
      ) : (
        <></>
      )}
      {isNotFoundShow ? <NotFoundNews /> : <></>}
      <About />
    </main>
  );
};

export default Main;
