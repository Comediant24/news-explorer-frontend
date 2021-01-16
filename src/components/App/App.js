import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginPopup from '../LoginPopup/LoginPopup';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(true);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);

  const handleEscFunction = (e) => {
    if (e.keyCode === 27) closeAllPopups();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscFunction);

    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, []);

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };

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

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        location={pathname}
        handleClick={handleClick}
        onRegister={handleLoginPopupClick}
        isPopupOpen={isPopupOpen}
      />
      <Switch>
        <Route exact path="/">
          <Main location={pathname} />
          <LoginPopup
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            handlePopup={handleRegisterPopupClick}
          />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews location={pathname} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
