import React from 'react';
import './Preloader.css';

function Preloader({ isShow }) {
  return (
    <section className={isShow ? 'preloader preloader_active' : 'preloader'}>
      <i className="preloader__circle" />
      <p className="preloader__title">Идет поиск новостей...</p>
    </section>
  );
}

export default Preloader;
