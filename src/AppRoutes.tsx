import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AppLayout } from './pages/AppLayout';
import { AppIndex } from './pages/AppIndex';
import { ProductsPage } from './pages/ProductsPage';

export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <AppIndex /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
};
