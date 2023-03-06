import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => (
  <nav className="nav">
    <div className="links">
      <div className="logo">
        <img src={logo} className="logo-pic" alt="spacehub-logo" />
        <h1 className="logo-title">Space Travelers&apos Hub</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? 'active-link' : '')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? 'active-link' : '')}
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? 'active-link' : '')}
            to="/profile"
          >
            My profile
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
