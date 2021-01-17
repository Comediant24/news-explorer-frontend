import React from 'react';
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
  const handleInputChange = (e) => {
    changeValue(e);
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
      {name === 'name' ? (
        apiError ? (
          <span className="input__error input__error_api">
            Такой пользователь уже есть
          </span>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
