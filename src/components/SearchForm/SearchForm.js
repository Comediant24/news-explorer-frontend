import React, { createRef, useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ getArticlesNews }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [placeholderMessage, setPlaceHolderMessage] = useState(
    'Введите тему новости'
  );
  const [isPlaceholderShow, setPlaceholderShow] = useState(false);

  const inputRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword.trim().length === 0) {
      setPlaceHolderMessage('Нужно ввести ключевое слово');
      setPlaceholderShow(true);
      inputRef.current.focus();
    } else {
      getArticlesNews(searchKeyword);
      setSearchKeyword('');
    }
  };

  const handleChangeSearchInput = (e) => {
    setSearchKeyword(e.target.value);
    handleEmptySearchRequest();
  };

  const handleEmptySearchRequest = () => {
    setPlaceholderShow(false);
    setPlaceHolderMessage('Введите тему новости');
  };

  return (
    <section className="search-form">
      <form
        onSubmit={handleSubmit}
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
            ref={inputRef}
            value={searchKeyword}
            onChange={handleChangeSearchInput}
            onBlur={handleEmptySearchRequest}
            className={`search-form__input ${
              isPlaceholderShow
                ? 'search-form__input_error search-form__input-placeholder'
                : ''
            }`}
            name="searchRequire"
            type="text"
            placeholder={placeholderMessage}
            autoComplete="off"
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
