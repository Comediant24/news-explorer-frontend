import React, { forwardRef } from 'react';
import './PopupWithForm.css';

const PopupWithForm = forwardRef(
  (
    { isValid = true, name, children, onSubmit, buttonText, switchPopupOpen },
    ref
  ) => {
    return (
      <form
        ref={ref}
        className={`popup__form popup__form_${name}`}
        name={name}
        action="#"
        onSubmit={onSubmit}
        noValidate
      >
        <fieldset className="popup__input-container">{children}</fieldset>
        <button
          className={`button popup__submit-button ${
            isValid ? '' : 'popup__submit-button_disabled'
          }`}
          type="submit"
          disabled={!isValid}
        >
          {buttonText || 'Сохранить'}
        </button>
        <p className="popup__handle">
          или{' '}
          <span className="popup__handle_link" onClick={switchPopupOpen}>
            {name === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </span>
        </p>
      </form>
    );
  }
);

export default PopupWithForm;
