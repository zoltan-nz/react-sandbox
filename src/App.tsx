import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AccountPage } from './pages/AccountPage';
import { AccountsPage } from './pages/AccountsPage';
import { AppPage } from './pages/AppPage';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <AppPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'accounts', element: <AccountsPage />, children: [{ path: ':id', element: <AccountPage /> }] },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
};
