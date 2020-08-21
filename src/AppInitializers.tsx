import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppInitializers: FC = ({ children }) => (
  <StrictMode>
    <BrowserRouter>{children}</BrowserRouter>
  </StrictMode>
);
