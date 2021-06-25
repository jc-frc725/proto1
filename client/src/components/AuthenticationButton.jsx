import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
// wrap both Login and Logout into one component
// 'switches' Login/Logout depending on authentication state
// encapsulates Login/Logout behavior w/o having to expose how authentication switching works

const AuthenticationButton = () => {
  // isAuthenticated is a boolean exposed by useAuth0.
  // true if user is authenticated, false otherwise.
  const { isAuthenticated } = useAuth0();

  // if user is authenticated, return the Logout Button, else return the Login button
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;