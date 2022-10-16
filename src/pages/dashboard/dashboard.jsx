import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './header';
import ListCards from './listCards';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <ListCards />
    </>
  );
};

export default Dashboard;
