import React, { createRef, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import PopupInput from '../PopupInput/PopupInput';
import PopupWithForm from '../PopupWithForm/PopupWithForn';

function LoginPopup({ isOpen, onClose, handlePopup }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    onClose();
  }

  return (
    <PopupWithForm
      ref={valid}
      name="login"
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      buttonText="Войти"
    >
      <PopupInput
        value={values.email}
        label="Email"
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
        label="Пароль"
        changeValue={handleChange}
        name="password"
        type="password"
        placeholder="Пароль"
        required
        minLeng={true}
        autoComplete="off"
        validationMessage={errors.password}
      />
    </PopupWithForm>
  );
}

export default LoginPopup;
