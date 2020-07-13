import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
