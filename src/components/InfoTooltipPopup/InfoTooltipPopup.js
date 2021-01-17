import React from 'react';
import Popup from '../Popup/Popup';
import './InfoTooltipPopup.css';

const InfoTooltipPopup = ({ isOpen, onClose, handlePopup }) => {
  const handleSwitchPopup = () => {
    onClose();
    handlePopup();
  };

  return (
    <Popup
      name="infotooltip"
      isOpen={isOpen}
      onClose={onClose}
      title="Пользователь успешно зарегистрирован!"
    >
      <p className="popup__login-link" onClick={handleSwitchPopup}>
        Войти
      </p>
    </Popup>
  );
};

export default InfoTooltipPopup;
