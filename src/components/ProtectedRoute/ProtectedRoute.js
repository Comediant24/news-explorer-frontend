import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, ...routeProps }) => {
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      routeProps.onLogin();
    }
  }, []);
  return token ? <Route {...routeProps} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
