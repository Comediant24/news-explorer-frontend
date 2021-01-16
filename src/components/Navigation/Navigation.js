import React from 'react';
import './Navigation.css';
import { ReactComponent as LogoutIcon } from '../../images/exit.svg';
import { NavLink } from 'react-router-dom';

const Navigation = ({
  loggedIn,
  location,
  handleClickMenu,
  clickedMenu,
  handleClickAuth,
  handleCloseClick,
  onRegister,
  isPopupOpen,
  onClickOut,
}) => {
  const blackClass = {
    link: 'navbar__link_black',
    selectLink: 'navbar__link_select_black',
    btn: 'navbar__btn_black',
    btnLogout: 'navbar__btn-logout_black',
    menuIcon: 'navbar__menu-icon-item_dark',
  };

  const authButtonClick = () => {
    handleClickAuth();
    onRegister();
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu-icon" onClick={handleClickMenu}>
        <span
          className={`navbar__menu-icon-item ${
            clickedMenu
              ? 'navbar__menu-icon-item_active'
              : location === '/saved-news'
              ? blackClass.menuIcon
              : ''
          } ${isPopupOpen() ? 'navbar__menu-icon_hidden' : ''}`}
        ></span>
      </div>

      <ul
        className={
          clickedMenu ? 'navbar__list navbar__list_active' : 'navbar__list'
        }
      >
        <li className="navbar__list-item">
          <NavLink
            onClick={handleCloseClick}
            exact
            to="/"
            activeClassName={`navbar__link_select ${
              location === '/saved-news' ? blackClass.selectLink : ''
            }`}
            className={`navbar__link ${
              clickedMenu
                ? ''
                : location === '/saved-news'
                ? blackClass.link
                : ''
            }`}
          >
            Главная
          </NavLink>
        </li>
        {loggedIn ? (
          <li className="navbar__list-item">
            <NavLink
              onClick={handleCloseClick}
              exact
              to="/saved-news"
              activeClassName={`navbar__link_select ${
                clickedMenu
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.selectLink
                  : ''
              }`}
              className={`navbar__link ${
                clickedMenu
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.link
                  : ''
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
              onClick={onClickOut}
              arial-label="Выйти из аккаунта"
              className={`navbar__link navbar__btn ${
                clickedMenu
                  ? ''
                  : location === '/saved-news'
                  ? blackClass.link + ' ' + blackClass.btn
                  : ''
              }`}
            >
              UserName
              <LogoutIcon
                className={`navbar__btn-logout ${
                  clickedMenu
                    ? ''
                    : location === '/saved-news'
                    ? blackClass.btnLogout
                    : ''
                }`}
              />
            </button>
          ) : (
            <button
              onClick={authButtonClick}
              arial-label="Залогиниться"
              className={`navbar__link navbar__btn ${
                clickedMenu
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
          clickedMenu ? 'navbar__hover navbar__hover_active' : 'navbar__hover'
        }
      ></div>
    </nav>
  );
};

export default Navigation;
