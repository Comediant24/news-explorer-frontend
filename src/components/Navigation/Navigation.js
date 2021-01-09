import React from 'react';
import './Navigation.css';
import { ReactComponent as Logout } from '../../images/exit.svg';
import { NavLink } from 'react-router-dom';

const Navigation = ({ loggedIn, location, onClick, clicked }) => {
  loggedIn = true;

  const handleClick = () => {
    onClick();
  };

  const blackClass = {
    link: 'navbar__link_black',
    selectLink: 'navbar__link_select_black',
    btn: 'navbar__btn_black',
    btnLogout: 'navbar__btn-logout_black',
    menuIcon: 'navbar__menu-icon-item_dark',
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu-icon" onClick={handleClick}>
        <span
          className={`navbar__menu-icon-item ${
            clicked
              ? 'navbar__menu-icon-item_active'
              : location === '/saved-news'
              ? blackClass.menuIcon
              : ''
          } `}
        ></span>
      </div>

      <ul
        className={
          clicked ? 'navbar__list navbar__list_active' : 'navbar__list'
        }
      >
        <li className="navbar__list-item">
          <NavLink
            exact
            to="/"
            activeClassName={`navbar__link_select ${
              location === '/saved-news' ? blackClass.selectLink : ''
            }`}
            className={`navbar__link ${
              clicked ? '' : location === '/saved-news' ? blackClass.link : ''
            }`}
          >
            Главная
          </NavLink>
        </li>
        {loggedIn ? (
          <li className="navbar__list-item">
            <NavLink
              exact
              to="/saved-news"
              activeClassName={`navbar__link_select ${
                clicked
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.selectLink
                  : ''
              }`}
              className={`navbar__link ${
                clicked ? '' : location === '/saved-news' ? blackClass.link : ''
              }`}
            >
              Сохраненные статьи
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li className="navbar__list-item">
          {loggedIn ? (
            <button
              arial-label="Выйти из аккаунта"
              className={`navbar__link navbar__btn ${
                clicked
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.link + ' ' + blackClass.btn
                  : ''
              }`}
            >
              UserName
              <Logout
                className={`navbar__btn-logout ${
                  clicked
                    ? ''
                    : location === '/saved-news'
                    ? blackClass.btnLogout
                    : ''
                }`}
              />
            </button>
          ) : (
            <button
              arial-label="Залогиниться"
              className={`navbar__link navbar__btn ${
                clicked
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.link + ' ' + blackClass.btn
                  : ''
              }`}
            >
              Авторизоваться
            </button>
          )}
        </li>
      </ul>
      <div
        className={
          clicked ? 'navbar__hover navbar__hover_active' : 'navbar__hover'
        }
      ></div>
    </nav>
  );
};

export default Navigation;
