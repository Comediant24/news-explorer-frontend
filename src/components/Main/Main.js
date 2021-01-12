import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

const Main = ({ location }) => {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <NewsCardList location={location} />
      <About />
    </main>
  );
};

export default Main;
