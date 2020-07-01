import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const AppBar: FC = (props) => (
  <Box
    tag="header"
    direction="row-responsive"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="xsmall"
    style={{ zIndex: 1 }}
    {...props}
  />
);

export const NavigationBar = () => (
  <AppBar>
    <Heading level="3" margin="none">
      My App
    </Heading>
    <nav>
      <NavLink to="/" end={true}>
        Home
      </NavLink>{' '}
      | <NavLink to="/products">Products</NavLink> | <NavLink to="/about">About</NavLink>
      <Button icon={<Notification />} onClick={() => {}} />
    </nav>
  </AppBar>
);
