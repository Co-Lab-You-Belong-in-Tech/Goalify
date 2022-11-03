import React from 'react';
import { useSelector } from 'react-redux';
import InitialGoalMessage from '../../components/stepper/InitialGoalMessage';
import Card from './card';
const ListCards = () => {
  const { goals, catagories } = useSelector((state) => state);
  const selected = catagories.selected;
  const myGoals =
    selected === 0
      ? goals
      : goals.filter((goal) => goal.catagoryId === selected);
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center my-10">
      {myGoals.length > 0 ? (
        myGoals.map((goal) => <Card key={goal.id} goal={goal} />)
      ) : (
        <InitialGoalMessage />
      )}
    </div>
  );
};

export default ListCards;
