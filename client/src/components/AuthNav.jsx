import React from 'react';

import AuthenticationButton from './AuthenticationButton';

// "Authentication component for the Navigation bar"

const AuthNav = () => {
  return (
    <div role='navigation' className='navbar-nav ml-auto'>
      <AuthenticationButton />
    </div>
  )
};

export default AuthNav;