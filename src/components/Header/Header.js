import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, location }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header
      className={`header ${location === '/saved-news' ? 'header__white' : ''} ${
        clicked ? 'header_dark' : ''
      }`}
    >
      <div className="header__container">
        <Link
          to="/"
          className={`header__link header__link_main ${
            clicked
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
          onClick={handleClick}
          clicked={clicked}
        />
      </div>
    </header>
  );
};

export default Header;
