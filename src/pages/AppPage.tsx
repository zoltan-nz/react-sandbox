import { Container } from '@material-ui/core';
import { FC } from 'react';
import { Outlet } from 'react-router';
import { NavigationBar } from '../components/NavigationBar';

export const AppPage: FC = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
