import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => (
  <nav>
    <NavLink className="nav-link" to="/" end={true}>
      Home
    </NavLink>{' '}
    |{' '}
    <NavLink className="nav-link" to="/products">
      Products
    </NavLink>{' '}
    |{' '}
    <NavLink className="nav-link" to="/about">
      About
    </NavLink>
  </nav>
);
