import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => (
  <nav>
    <NavLink to="/" end={true}>
      Home
    </NavLink>{' '}
    | <NavLink to="/products">Products</NavLink> | <NavLink to="/about">About</NavLink>
  </nav>
);
