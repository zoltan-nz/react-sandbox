import { Box, Grommet } from 'grommet';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';
import theme from './theme';

export const AppPage = () => (
  <Grommet theme={theme} full>
    <Box fill>
      <NavigationBar />
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align="center" justify="center">
          <Outlet />
        </Box>
        <Box width="medium" background="ligth-2" elevation="small" align="center" justify="center">
          sidebar
        </Box>
      </Box>
    </Box>
  </Grommet>
);
