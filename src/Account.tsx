import React from 'react';
import { useParams } from 'react-router-dom';

const Account = () => {
  const { id } = useParams();
  return <p>{id}</p>;
};

export default Account;
