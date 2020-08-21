import { useRoutes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AppIndexPage } from './pages/AppIndexPage';
import { AppPage } from './pages/AppPage';
import { ProductsPage } from './pages/ProductsPage';

export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <AppPage />,
      children: [
        { path: '/', element: <AppIndexPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
};
