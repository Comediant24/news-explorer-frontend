import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        location={pathname}
        handleClick={handleClick}
      />
      <Switch>
        <Route exact path="/">
          <Main location={pathname} />
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
