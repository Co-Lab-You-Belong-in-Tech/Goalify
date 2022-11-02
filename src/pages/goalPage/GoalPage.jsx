import { useParams } from 'react-router-dom';
import * as React from 'react';
import Logo from '../../assets/icons/logo.png';
import { useSelector } from 'react-redux';
import MilestoneCard from './milestoneCard';

const GoalPage = () => {
  let params = useParams();
  const goals = useSelector((state) => state.goals);
  const goal = goals.find((goal) => goal.id == params.goalId);

  return (
      // wrap
    <div className={'bg-gray-100 relative h-full w-full'}>
      {/*header*/}
      <div className="bg-yellow-100 fixed top-0 left-0 w-full h-32 py-5 px-20">
        <div className="flex gap-4 items-center my-1">
          <img src={Logo} alt="logo" />
          <h1 className="text-4xl font-semibold">Welcome back, Jason</h1>
        </div>
      </div>
      {/*body wrap*/}
      <div className="h-full  p-5  mt-32">
        {/*1st col*/}
        <div className="w-1/4  left-0 top-32 bottom-0 h-full fixed flex flex-col items-center py-5 p-7">
          <div className={'mb-3 p-3  bg-white min-w-full'}>
            <p className="font-semibold text-slate-600 leading-5 text-base mb-4">
              Your Motivation
            </p>
            <blockquote
              suppressContentEditableWarning={true}
              className={'bg-slate-100 p-3'}
              contentEditable={"true"}
            >
              {goal.motivation}
            </blockquote>
          </div>
        </div>
        {/*2nd col*/}
        <div className="grow top-32  h-full w-2/4 mx-[24%]">
          <p className={'text-3xl font-bold leading-9 mb-8'}>{goal.content}</p>
          <p className="font-semibold text-slate-600 leading-5 text-base mb-5">
            Your Milestones
          </p>
          {goal.milestones.map((m, i) => (
            <MilestoneCard
              milestone={m}
              goal={goal}
              key={Math.random() * 100}
              i={i}
            />
          ))}
        </div>
        {/*3rd col*/}
        <div className="flex-none w-1/4 h-14 mx-2 right-0 top-32 bottom-0  h-full fixed p-5">03</div>
      </div>
    </div>
  );
};

export default GoalPage;
