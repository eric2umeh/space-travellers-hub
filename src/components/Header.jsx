import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => (
  <header className="header">
    <div className="header-container row">
      <Link to="/" className="logo">
        Bookstore CMS
      </Link>
      <Navigation />
      <span className="user">
        <BsFillPersonFill className="icon" />
      </span>
    </div>
  </header>
);

export default Header;
