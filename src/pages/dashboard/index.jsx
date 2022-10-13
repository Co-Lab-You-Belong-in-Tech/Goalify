import React from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../redux/goal/goalSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Dashboard asdsad</p>
      <button onClick={() => dispatch(addGoal({ id: 1, name: 'hello' }))}>
        add goal
      </button>
    </div>
  );
};

export default Dashboard;
