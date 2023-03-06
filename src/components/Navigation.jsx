import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => (
  <nav className="navbar">
    <div className="links">
      <div className="logo">
        <img src={logo} className="logo-pic" alt="spacehub-logo" />
        <h1 className="logo-title">Space Travelers&apos Hub</h1>
      </div>
      <ul>
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/profile">My profile</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
