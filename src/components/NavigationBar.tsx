import { AppBar, Container } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <AppBar position="static" color="default">
      <Container style={{ flexGrow: 1 }}>
        <h1 style={{ flexGrow: 1 }}> Sandbox</h1>
        <nav style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
          <NavLink style={{ flexGrow: 1 }} to="/">
            Home
          </NavLink>
          <NavLink style={{ flexGrow: 1 }} to="/products">
            Products
          </NavLink>
          <NavLink style={{ flexGrow: 1 }} to="/about">
            About
          </NavLink>
        </nav>
        <button style={{ flexGrow: 1 }}>Login</button>
      </Container>
    </AppBar>
  );
};
