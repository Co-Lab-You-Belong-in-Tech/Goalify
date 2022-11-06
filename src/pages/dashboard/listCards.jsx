import React from 'react';
import { useSelector } from 'react-redux';
import InitialGoalMessage from '../../components/stepper/InitialGoalMessage';
import Card from './card';
const ListCards = () => {
  const { goals, categories } = useSelector((state) => state);
  const selected = categories.selected;
  const myGoals =
    selected === 0
      ? goals
      : goals.filter((goal) => goal.categoryId === selected);
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center mt-44 px-10 py-7">
      {myGoals.length > 0 ?  (
        myGoals.filter((g)=> g.categoryId == selected).map((goal) => <Card key={goal.id} goal={goal} />)
      ) : <div>
        <InitialGoalMessage />

      </div>
      }
    </div>
  );
};

export default ListCards;
