import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form
        className="search-form__container"
        name="searchForm"
        action="#"
        noValidate
      >
        <h1 className="search-form__title">
          Что творится в<br />
          мире?
        </h1>
        <p className="search-form__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        <div className="search-form__input-wrapper">
          <input
            className="search-form__input"
            name="searchRequire"
            type="text"
            placeholder="Введите тему новости"
            required
          />
          <button
            className="search-form__btn"
            type="submit"
            aria-label="Найти новости"
          >
            Искать
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
