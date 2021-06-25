import React from 'react';

import AuthenticationButton from './AuthenticationButton';

const AuthNav = () => {
  return (
    <div role='navigation' className='navbar-nav ml-auto'>
      <AuthenticationButton />
    </div>
  )
};

export default AuthNav;