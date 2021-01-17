import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  return (
    <section className="savedheader">
      <div className="savedheader__container">
        <p className="savedheader__description">Сохранённые статьи</p>
        <h1 className="savedheader__title">
          Грета, у вас 5 сохранённых статей
        </h1>
        <p className="savedheader__tag-list">
          По ключевым словам:
          <span className="savedheader__tag"> Природа, Тайга и 2-м другим</span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
