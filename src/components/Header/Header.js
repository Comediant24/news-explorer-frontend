import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, location }) => {
  console.log('location', location);
  return (
    <header
      className={`header ${location === '/saved-news' ? 'header__white' : ''}`}
    >
      <div className="header__top">
        <Link
          to="/"
          className={`header__link header__link_main ${
            location === '/saved-news' ? 'header__link_black' : ''
          }`}
        >
          NewsExplorer
        </Link>
        <Navigation loggedIn={loggedIn} location={location} />
      </div>
    </header>
  );
};

export default Header;
