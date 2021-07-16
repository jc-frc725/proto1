import React from 'react';
import { Link } from 'react-router-dom';

import AuthNav from './AuthNav';

const NavBar = () => {
  return (
    <div className='nav-container mb-3'>
      <nav className='navbar navbar-extend-md navbar-light bg-light'>
        <div className='container'>
          <div className='navbar-brand'>
            <AuthNav />
            <Link to="/">Home</Link>
          </div>
        </div>
      </nav>
    </div>
  )
  
};

export default NavBar;