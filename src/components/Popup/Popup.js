import React from 'react';
import './Popup.css';

const Popup = ({ name, children, isOpen, onClose }) => {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      {children}
    </section>
  );
};

export default Popup;
