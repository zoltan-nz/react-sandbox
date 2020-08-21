import { FC } from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Outlet } from 'react-router';

export const AppPage: FC = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
