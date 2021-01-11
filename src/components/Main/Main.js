import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

const Main = ({ location }) => {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList location={location} />
    </main>
  );
};

export default Main;
