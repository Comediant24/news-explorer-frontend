import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header loggedIn={loggedIn} location={pathname} />
    </div>
  );
}

export default App;
