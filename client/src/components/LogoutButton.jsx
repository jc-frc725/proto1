import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  // log users out w/ logout method from Auth0 Hook
  const { logout } = useAuth0();

  return (
     // provide a URL to logout to by specifiying a 'returnTo' property as a config object
     // this URL must be listed in the "Allowed Logout URLs" in the Auth0 account's Dashboard under an Application's settings
     // i.e. for production, ensure that it returns to the *production* logout URL
    <button className='btn btn-danger' onClick={() => logout({ returnTo: window.location.origin })}>
      LOG OUT
    </button>
  )
};

export default LogoutButton;