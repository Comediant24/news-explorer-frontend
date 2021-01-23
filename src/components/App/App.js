import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
import InfoTooltipPopup from '../InfoTooltipPopup/InfoTooltipPopup';
import {
  addNewsCard,
  authorize,
  getUserData,
  register,
  getSavedNews,
  removeCard,
} from '../../utils/MainApi';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState('');
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [userCards, setUserCards] = useState([]);

  const handleEscFunction = (e) => {
    if (e.keyCode === 27) closeAllPopups();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscFunction);

    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('token');
      getSavedCards(token);
    }
  }, [loggedIn, history]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenCheck(token);
    }
  }, []);

  const isPopupOpen = () => {
    return isLoginPopupOpen || isRegisterPopupOpen || isInfoTooltipPopupOpen;
  };

  const closeAllPopups = () => {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  };

  const handleLoginPopupClick = () => {
    setLoginPopupOpen(true);
  };

  const handleRegisterPopupClick = () => {
    setRegisterPopupOpen(true);
  };

  const onSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/');
    setUserCards([]);
    setCurrentUser('');
  };

  const tokenCheck = (token) => {
    return getUserData(token)
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        setUserName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRegister = (email, password, name) => {
    register(email, password, name)
      .then((data) => {
        if (data) {
          setRegisterPopupOpen(false);
          setInfoTooltipPopupOpen(true);
          setServerError(null);
        }
      })
      .catch((err) => {
        if (err.error === 409) setServerError(409);
        if (err.error === 400) setServerError(400);
        console.log(err);
      });
  };

  const onLogin = (email, password) => {
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          tokenCheck(data.token);
          closeAllPopups();
          setServerError(null);
        }
      })
      .catch((err) => {
        if (err.error === 401) setServerError(401);
        if (err.error === 400) setServerError(400);
        console.log(err);
      });
  };

  const handleNewsCardSave = (newsData) => {
    const token = localStorage.getItem('token');
    addNewsCard(newsData, token)
      .then(() => {
        getSavedCards(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSavedCards = (token) => {
    getSavedNews(token)
      .then((newsCards) => {
        setUserCards(newsCards.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeSavedCard = (id) => {
    const token = localStorage.getItem('token');
    removeCard(id, token)
      .then((data) => {
        getSavedCards(token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          location={pathname}
          onClickOut={onSignOut}
          onRegister={handleLoginPopupClick}
          isPopupOpen={isPopupOpen}
          userName={userName}
        />
        <Switch>
          <Route exact path="/">
            <Main
              location={pathname}
              loggedIn={loggedIn}
              onLoginOpen={handleLoginPopupClick}
              bookmarkBtnClick={handleNewsCardSave}
              removeBookmarkCard={removeSavedCard}
              savedUserCards={userCards}
            />
            <LoginPopup
              isOpen={isLoginPopupOpen}
              onClose={closeAllPopups}
              handlePopup={handleRegisterPopupClick}
              onLogin={onLogin}
              apiError={serverError}
            />
            <RegisterPopup
              isOpen={isRegisterPopupOpen}
              onClose={closeAllPopups}
              handlePopup={handleLoginPopupClick}
              onRegister={onRegister}
              apiError={serverError}
            />
            <InfoTooltipPopup
              isOpen={isInfoTooltipPopupOpen}
              onClose={closeAllPopups}
              handlePopup={handleLoginPopupClick}
            />
          </Route>
          <Route exact path="/saved-news">
            <SavedNews
              location={pathname}
              savedUserCards={userCards}
              loggedIn={loggedIn}
              removeCard={removeSavedCard}
            />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
