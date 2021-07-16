import React from 'react';
import { Link } from 'react-router-dom';

import AuthNav from './AuthNav';

const NavBar = () => {
  return (
    <div className='nav-container mb-3'>
      <nav className='navbar navbar-extend-md navbar-light bg-info'>
        <div className='container'>
          <div className='navbar-brand d-flex flex-row'>
            <AuthNav />
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
    </div>
  )
  
};

export default NavBar;