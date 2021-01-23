import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = ({ location, savedUserCards, loggedIn, removeCard }) => {
  return (
    <section className="savednews">
      <SavedNewsHeader />
      {savedUserCards.length > 0 ? (
        <NewsCardList
          articles={savedUserCards}
          location={location}
          loggedIn={loggedIn}
          removeCard={removeCard}
          //ookmarkBtnClick={bookmarkBtnClick}
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default SavedNews;
