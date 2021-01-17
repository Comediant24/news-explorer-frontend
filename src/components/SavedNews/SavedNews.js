import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = ({ location }) => {
  return (
    <section className="savednews">
      <SavedNewsHeader />
      <NewsCardList location={location} />
    </section>
  );
};

export default SavedNews;
