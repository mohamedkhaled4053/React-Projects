import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src={logo}
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink style={({isActive})=> isActive?{color: 'red'}:null} to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({isActive})=> isActive?{color: 'red'}:null}>about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
