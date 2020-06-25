import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AppPage } from './pages/AppPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';

export const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <AppPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
};
