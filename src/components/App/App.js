import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header loggedIn={loggedIn} location={pathname} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
