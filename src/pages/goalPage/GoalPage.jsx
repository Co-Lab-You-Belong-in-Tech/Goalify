import { useParams } from 'react-router-dom';
import * as React from 'react';
import Logo from '../../assets/icons/logo.png';
import Button from '../../components/button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import inProgress from '../../assets/icons/inProgress.svg';
import progress from '../../assets/icons/progress.svg';
import dots from '../../assets/icons/dots.svg';
import uploadImg from '../../assets/icons/uploadImg.svg';
import selectEmoji from '../../assets/icons/selectEmoji.svg';
import save from '../../assets/icons/save.svg';
import x from '../../assets/icons/x.svg';
import undo from '../../assets/icons/undo.svg';
import remove from '../../assets/icons/delete.svg';
import { useEffect, useState } from 'react';
import { editGoal } from '../../redux/goal/goalSlice.js';
import MilestoneCard from './milestoneCard';

const GoalPage = () => {
  let params = useParams();
  const goals = useSelector((state) => state.goals);
  const goal = goals.find((goal) => goal.id == params.goalId);
  const [modify, setModify] = useState({ state: false });
  const dispatch = useDispatch();
  // useEffect(() => {
  //     console.log(goals)
  // }, [goals])
  //   const reflection = (
  //     <div className={''}>
  //       <div className={'pl-4 pb-4 mb-5 flex bg-white'}>
  //         <div
  //           className={'w-9 h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4'}
  //         >
  //           <img src={uploadImg} />
  //         </div>
  //         <div
  //           className={'w-9 h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4'}
  //         >
  //           <img src={selectEmoji} />
  //         </div>
  //       </div>
  //       <div className={'pl-4'}>
  //         <div className={' bg-gray-100 w-full pr-4 mb-3'}>
  //           <p> Reflection </p>
  //           <input
  //             className={
  //               'my-2 bg-gray-100 border border-gray-300 w-full p-2 rounded-l'
  //             }
  //           />
  //         </div>
  //         <button className={' bg-gray-200 flex p-2 rounded-xl'}>
  //           <img className={'mr-4'} src={save} />
  //           <p> Save reflection</p>
  //         </button>
  //       </div>
  //     </div>
  //   );
  return (
    <div className={'bg-gray-100'}>
      <div className="bg-yellow-100 h-56 py-3 md:py-5 md:px-20">
        <div className="flex gap-4 items-center my-5">
          <img src={Logo} alt="logo" />
          <h1 className="text-4xl font-semibold">Welcome back, Jason</h1>
        </div>
        <div>
          <Button className="btn-primary w-44 ml-2">+ Create a goal</Button>
        </div>
      </div>
      <div className="h-screen flex px-5  mt-4">
        {/*1st col*/}
        <div className="h-fit flex-none w-1/4 h-14  mx-2">
          <div className={'mb-3 p-3  bg-white'}>
            <p className="font-semibold text-slate-600 leading-5 text-base mb-2">
              Your Motivation
            </p>
            <blockquote
            //   contentEditable="true"
              suppressContentEditableWarning={true}
              className={'bg-slate-100 p-3'}
            >
              {goal.motivation}
            </blockquote>
          </div>
        </div>
        {/*2nd col*/}
        <div className="grow h-14 mx-2 ">
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
        <div className="flex-none w-1/4 h-14 bg-white mx-2">03</div>
      </div>
    </div>
  );
};

export default GoalPage;
