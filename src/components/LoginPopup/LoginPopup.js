import React, { createRef, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForn';
import PopupInput from '../PopupInput/PopupInput';

const LoginPopup = ({ isOpen, onClose, handlePopup }) => {
  const valid = createRef();
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
    setIsValid(valid.current.checkValidity());
  }, [setIsValid, valid]);

  useEffect(() => {
    resetForm();
  }, [resetForm, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    onClose();
  };

  const handleSwitchPopup = () => {
    onClose();
    handlePopup();
  };

  return (
    <Popup name="login" isOpen={isOpen} onClose={onClose} title="Вход">
      <PopupWithForm
        ref={valid}
        name="login"
        onClose={onClose}
        onSubmit={handleSubmit}
        isValid={isValid}
        buttonText="Войти"
        switchPopupOpen={handleSwitchPopup}
      >
        <PopupInput
          value={values.email}
          titleForm="Email"
          id="email-login"
          changeValue={handleChange}
          name="email"
          type="email"
          placeholder="Ваше имя"
          required
          autoComplete="off"
          validationMessage={errors.email}
        />
        <PopupInput
          value={values.password}
          titleForm="Пароль"
          id="password-login"
          changeValue={handleChange}
          name="password"
          type="password"
          placeholder="Пароль"
          required
          minLength="6"
          autoComplete="off"
          validationMessage={errors.password}
        />
      </PopupWithForm>
    </Popup>
  );
};

export default LoginPopup;
