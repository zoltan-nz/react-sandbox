import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => (
  <div>
    <NavLink to="/" end={true}>
      Home
    </NavLink>{' '}
    | <NavLink to="/products">Products</NavLink> | <NavLink to="/about">About</NavLink>
  </div>
);
