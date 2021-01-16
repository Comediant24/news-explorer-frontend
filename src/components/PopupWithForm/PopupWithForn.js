import React, { forwardRef } from 'react';
import { ReactComponent as CLoseIcon } from '../../images/close-icon.svg';
import './PopupWithForm.css';

const PopupWithForm = forwardRef(
  (
    {
      isValid = true,
      name,
      title,
      children,
      isOpen,
      onClose,
      onSubmit,
      buttonText,
    },
    ref
  ) => {
    return (
      <section
        className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}
      >
        <div onClick={onClose} className="popup__overlay"></div>
        <form
          ref={ref}
          className={`popup__form popup__form_${name}`}
          name={name}
          action="#"
          onSubmit={onSubmit}
          noValidate
        >
          <h3 className="popup__title">{title}</h3>
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
            или <span className="popup__handle_link">Зарегистрироваться</span>
          </p>
          <button
            className={`button popup__close-button`}
            onClick={onClose}
            type="button"
            aria-label="Закрыть окно"
          >
            <CLoseIcon className="popup__close-icon" />
          </button>
        </form>
      </section>
    );
  }
);

export default PopupWithForm;
