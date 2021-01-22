import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({
  loggedIn,
  location,
  onRegister,
  isPopupOpen,
  onClickOut,
  userName,
}) => {
  const [clickedMenu, setClickedMenu] = useState(false);

  const handleClickMenu = () => {
    setClickedMenu(!clickedMenu);
  };

  const handleCloseClick = () => {
    setClickedMenu(false);
  };

  const handleLogout = () => {
    onClickOut();
    handleCloseClick();
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
          onClickOut={handleLogout}
          loggedIn={loggedIn}
          location={location}
          clickedMenu={clickedMenu}
          handleClickMenu={handleClickMenu}
          handleCloseClick={handleCloseClick}
          onRegister={onRegister}
          isPopupOpen={isPopupOpen}
          userName={userName}
        />
      </div>
    </header>
  );
};

export default Header;
