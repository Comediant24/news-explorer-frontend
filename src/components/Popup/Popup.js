import React from 'react';
import { ReactComponent as CLoseIcon } from '../../images/close-icon.svg';
import './Popup.css';

const Popup = ({ name, children, isOpen, onClose, title }) => {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className={`popup__container popup__container_${name}`}>
        <button
          className={`button popup__close-button`}
          onClick={onClose}
          type="button"
          aria-label="Закрыть окно"
        >
          <CLoseIcon className="popup__close-icon" />
        </button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </section>
  );
};

export default Popup;
