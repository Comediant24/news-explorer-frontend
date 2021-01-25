import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = ({
  location,
  savedUserCards,
  loggedIn,
  removeCard,
  userName,
}) => {
  return (
    <section className="savednews">
      <SavedNewsHeader userName={userName} userArticles={savedUserCards} />
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
