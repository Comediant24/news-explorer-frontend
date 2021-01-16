import React, { createRef, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForn';
import PopupInput from '../PopupInput/PopupInput';

const RegisterPopup = ({ isOpen, onClose, handlePopup }) => {
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
    <Popup name="register" isOpen={isOpen} onClose={onClose}>
      <PopupWithForm
        ref={valid}
        name="register"
        title="Регистрация"
        onClose={onClose}
        onSubmit={handleSubmit}
        isValid={isValid}
        buttonText="Зарегистрироваться"
        switchPopupOpen={handleSwitchPopup}
      >
        <PopupInput
          value={values.email}
          titleForm="Email"
          id="email-register"
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
          id="password-register"
          changeValue={handleChange}
          name="password"
          type="password"
          placeholder="Пароль"
          required
          minLength="6"
          autoComplete="off"
          validationMessage={errors.password}
        />
        <PopupInput
          value={values.name}
          titleForm="Имя"
          changeValue={handleChange}
          id="name-register"
          name="name"
          type="text"
          placeholder="Введите своё имя"
          required
          minLength="2"
          autoComplete="off"
          validationMessage={errors.name}
        />
      </PopupWithForm>
    </Popup>
  );
};

export default RegisterPopup;
