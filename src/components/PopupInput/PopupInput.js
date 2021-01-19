import React, { useEffect, useState } from 'react';
import './PopupInput.css';

const Input = ({
  titleForm,
  changeValue,
  name,
  value,
  validationMessage,
  minLength,
  id,
  apiError,
  ...rest
}) => {
  const [textApiError, setTextApiError] = useState('');

  useEffect(() => {
    apiError === 409
      ? setTextApiError('Такой пользователь уже есть')
      : setTextApiError('Неккоректные данные');
  }, [apiError]);

  const handleInputChange = (e) => {
    changeValue(e);
    setTextApiError('');
  };

  return (
    <div className="input__container">
      <label className="input__label" htmlFor={id}>
        {titleForm}
      </label>
      <input
        {...rest}
        id={id}
        className={`input__form input__type_${name}`}
        name={name}
        onChange={handleInputChange}
        minLength={minLength}
        value={value || ''}
      />
      <span className="input__error">{validationMessage || ''}</span>
      {apiError ? (
        <span className="input__error input__error_api">{textApiError}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
