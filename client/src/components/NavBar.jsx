import React from 'react';
import { Link } from 'react-router-dom';

import AuthNav from './AuthNav';

const NavBar = () => {
  return (
    <div className='nav-container mb-3'>
      <nav className='navbar navbar-extend-md navbar-light bg-light'>
        <div className='container'>
          <div className='navbar-brand d-flex flex-row justify-content-center'>
            <AuthNav />
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
    </div>
  )
  
};

export default NavBar;