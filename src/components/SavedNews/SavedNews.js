import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = ({ location, savedUserCards, loggedIn, removeCard }) => {
  return (
    <section className="savednews">
      <SavedNewsHeader userArticles={savedUserCards} />
      {savedUserCards.length > 0 ? (
        <NewsCardList
          articles={savedUserCards}
          location={location}
          loggedIn={loggedIn}
          removeCard={removeCard}
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default SavedNews;
