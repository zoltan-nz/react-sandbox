import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AppLayout } from './pages/AppLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';

export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
};
