import React, { useEffect, useState } from 'react';
import './PopupInput.css';

const Input = ({
  label,
  changeValue,
  name,
  value,
  validationMessage,
  minLeng,
  ...rest
}) => {
  const [min, setMin] = useState('');

  useEffect(() => {
    if (minLeng) setMin('6');
  }, [minLeng]);

  function handleInputChange(e) {
    changeValue(e);
  }

  return (
    <div className="input__container">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className={`input__form input__type_${name}`}
        name={name}
        onChange={handleInputChange}
        minLength={min}
        value={value || ''}
      />
      <span className="input__error">{validationMessage || ''}</span>
    </div>
  );
};

export default Input;
