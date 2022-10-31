import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card';
const ListCards = () => {
  const goals = useSelector((state) => state.goals);
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center my-10">
      {goals.map((goal) => (
        <Card key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default ListCards;
