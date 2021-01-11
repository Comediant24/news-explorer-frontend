import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

const Main = ({ location }) => {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList location={location} />
      <About />
    </main>
  );
};

export default Main;
