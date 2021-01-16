import React from 'react';
import './Popup.css';

const Popup = ({ name, children, isOpen, onClose, title }) => {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </section>
  );
};

export default Popup;
