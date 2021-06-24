/*
  purpose of this file: define a React Component that uses composition
  to make React Router Hooks available to the Auth0Provider component
*/
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  // config for Auth0Provider
  const domain = process.env.AUTH0_DOMAIN;
  const clientId = process.env.AUTH0_CLIENT_ID;

  // a Hook that can access state of a Router; useHistory accesses a history instance
  // history instance manages session history + stack of histories
  const history = useHistory();
  
  // this method is for handling the event where Auth0 redirects from the Auth0 Login
  // back to the React App
  const onRedirectCallback = (appState) => {
    // the push() method takes users back to intended route to access
    history.push(appState?.returnTo || window.location.pathname);
  };

  /* the actual context/composition to be returning;
      it wraps *everything* in the Auth0Context, allowing Auth0 usage
      needs domain + clientId from Auth0 config,
      a redirectUri to return to
  */
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    > 
      {children}
    </Auth0Provider>
  )
};

export default Auth0ProviderWithHistory;