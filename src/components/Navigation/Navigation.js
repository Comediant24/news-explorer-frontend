import React from 'react';
import './Navigation.css';
import { ReactComponent as Logout } from '../../images/exit.svg';
import { NavLink } from 'react-router-dom';

const Navigation = ({ loggedIn, location }) => {
  const blackClass =
    location === '/saved-news'
      ? {
          link: 'navbar__link_black',
          selectLink: 'navbar__link_select_black',
          btn: 'navbar__btn_black',
          btnLogout: 'navbar__btn-logout_black',
        }
      : '';
  loggedIn = true;
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink
            exact
            to="/"
            activeClassName={`navbar__link_select ${blackClass.selectLink}`}
            className={`navbar__link ${blackClass.link}`}
          >
            Главная
          </NavLink>
        </li>
        {loggedIn ? (
          <li className="navbar__list-item">
            <NavLink
              exact
              to="/saved-news"
              activeClassName={`navbar__link_select ${blackClass.selectLink}`}
              className={`navbar__link ${blackClass.link}`}
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
              className={`navbar__link navbar__btn ${blackClass.link} ${blackClass.btn}`}
            >
              UserName
              <Logout
                className={`navbar__btn-logout ${blackClass.btnLogout}`}
              />
            </button>
          ) : (
            <button
              arial-label="Залогиниться"
              className={`navbar__link navbar__btn ${blackClass.link} ${blackClass.btn}`}
            >
              Авторизоваться
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
