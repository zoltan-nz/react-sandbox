import styled from '@emotion/styled';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLink = styled(NavLink)`
  color: inherit;
  flex-grow: 1;

  &.active {
    color: red;
  }
`;

export const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sandbox
          </Typography>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/products">Products</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
