import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';

export const AppPage = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);
