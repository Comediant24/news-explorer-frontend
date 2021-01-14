import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, location, handleClick }) => {
  const [clickedMenu, setClickedMenu] = useState(false);

  const handleClickMenu = () => {
    setClickedMenu(!clickedMenu);
  };

  const handleCloseClick = () => {
    setClickedMenu(false);
  };

  return (
    <header
      className={`header ${location === '/saved-news' ? 'header__white' : ''} ${
        clickedMenu ? 'header_dark' : ''
      }`}
    >
      <div className="header__container">
        <Link
          to="/"
          className={`header__link header__link_main ${
            clickedMenu
              ? ''
              : location === '/saved-news'
              ? 'header__link_black'
              : ''
          }`}
        >
          NewsExplorer
        </Link>
        <Navigation
          loggedIn={loggedIn}
          location={location}
          clickedMenu={clickedMenu}
          handleClickAuth={handleClick}
          handleClickMenu={handleClickMenu}
          handleCloseClick={handleCloseClick}
        />
      </div>
    </header>
  );
};

export default Header;
