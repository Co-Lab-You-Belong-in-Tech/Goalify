import React from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../redux/goal/goalSlice';
import ListCards from './listCards';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ListCards />
    </>
  );
};

export default Dashboard;
