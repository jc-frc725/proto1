import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  // log users in with login method from Auth0Context
  // will redirect to Auth0 Login page
  const { loginWithRedirect } = useAuth0();
  return (
    <button className='btn btn-primary' onClick={() => loginWithRedirect()}>
      LOG IN
    </button>
  )
};

export default LoginButton;