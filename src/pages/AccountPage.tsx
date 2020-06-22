import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface AccountPageProperties {
  id?: string;
}

export const AccountPage: FC<AccountPageProperties> = () => {
  const { id } = useParams();
  return <p>{id}</p>;
};
