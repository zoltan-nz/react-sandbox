import { CssBaseline } from '@material-ui/core';
import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppInitializers: FC = ({ children }) => (
  <StrictMode>
    <BrowserRouter>
      <CssBaseline />
      {children}
    </BrowserRouter>
  </StrictMode>
);
