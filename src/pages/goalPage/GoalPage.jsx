import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MilestoneCard from './milestoneCard';
import GoalDetails from './goalDetails';
import { Glogo, plusI, share, dir } from '../../assets/icons';

const GoalPage = () => {
  let params = useParams();
  const goals = useSelector((state) => state.goals);
  const goal = goals.find((goal) => goal.id == params.goalId);
  const [category, setCategory] = useState('all');
  return (
    // wrap
    <div className={'bg-[#FAFAFA] relative h-full w-full min-h-screen'}>
      {/*header*/}
      <div
        className="bg-r bg-orange-50 fixed top-0 left-0 w-full h-20 py-5 px-10 flex  justify-between items-center"
        style={
          {
            // 'backgroundColor': 'rgba(251, 234, 200, 0.5)'
          }
        }
      >
        <Link to="/">
          <img className= "hover:scale-[.95]" src={Glogo} alt="Goalify logo" />
        </Link>
        <div className={'flex justify-center items-center gap-4  '}>
          <img className={'p-2 rounded-3xl border bg-[#fafafa] hover:scale-[.85] '} src={plusI} title="Feature is under development"
  data-tooltip="This is the tooltip content" />
          <div
            className={'bg-gray-200 w-8 h-8 flex justify-center items-center rounded-3xl'
            }>
            <img src={dir} title="Feature is under development"
  data-tooltip="This is the tooltip content" />
          </div>
          <div
            className={
              'bg-gray-200 w-8 h-8 flex justify-center items-center rounded-3xl'
            }
          >
            <img src={share} title="Feature is under development"
  data-tooltip="This is the tooltip content" />
          </div>
          
          <div className={"rounded-3xl w-10 h-10"}> <img src={localStorage.getItem('userAvatar')} alt="userAvatar" className={"rounded-3xl w-10 h-10"}/> 
          </div>
        </div>
      </div>
      {/*body wrap*/}
      <div className="h-full  px-4 py-2  mt-20">
        {/*1st col*/}
        <div className="w-1/4  left-0 top-20 bottom-0 h-full fixed flex flex-col items-center py-5 p-7">
          <div
            className={
              'mb-3 p-3  bg-white min-w-full border-solid border border-gray-200 rounded-[8px]'
            }
          >
            <p className="fontFamily-Satoshi font-bold text-sm text-[#415472]  leading-5 text-base mb-4">
              Your Motivation
            </p>
            <blockquote
              suppressContentEditableWarning={true}
              className={
                'focus:border-0 bg-[#F5F5F5] p-3 text-[#717171] rounded-[8px]'
              }
              contentEditable={'true'}
            >
              {goal.motivation}
            </blockquote>
          </div>
        </div>
        {/*2nd col*/}
        <div className="grow  h-full w-2/4 mx-[24%]">
          <div className={'top-20 py-5 fixed w-2/4  bg-[#FAFAFA] '}>
            <p
              className={
                'pl-3 text-3xl font-bold leading-9 mb-8 text-[#152E40]'
              }
            >
              {goal.content}
            </p>
            <div className="bg-[#F5F5F5] border-[1px] border-[rgba(65, 84, 114, 0.08)] w-fit rounded-full p-2 flex  font-semibold gap-2 text-slate-600 leading-5  mb-4">
              <button
                onClick={() => {
                  setCategory('all');
                }}
                className={`${
                  category == 'all'
                    ? 'bg-white border-solid border border-gray-200'
                    : null
                } hover:bg-white rounded-3xl p-2 text-base font-semibold  `}
              >
                {' '}
                All milestones
              </button>
              <button
                onClick={() => {
                  setCategory('completed');
                }}
                className={`${
                  category == 'completed'
                    ? 'bg-white border-solid border border-gray-200'
                    : null
                }  hover:bg-white rounded-3xl p-2 text-base font-semibold   `}
              >
                {' '}
                Achieved milestones
              </button>
              <button
                onClick={() => {
                  setCategory('in-progress');
                }}
                className={`${
                  category == 'in-progress'
                    ? 'bg-white border-solid border border-gray-200'
                    : null
                }  hover:bg-white rounded-3xl p-2 text-base font-semibold `}
              >
                {' '}
                In-progress milestones
              </button>
            </div>
          </div>
          <div className={'mt-[12rem] snap-mandatory snap-y snap-always '}>
            {category == 'all'
              ? goal.milestones.map((m, i) => {
                  {
                    return (
                      <MilestoneCard
                        milestone={m}
                        goal={goal}
                        key={Math.random() * 100}
                        i={i}
                      />
                    );
                  }
                })
              : category == 'completed'
              ? goal.milestones
                  .filter((m) => m.completed)
                  .map((m, i) => {
                    {
                      return (
                        <MilestoneCard
                          milestone={m}
                          goal={goal}
                          key={Math.random() * 100}
                          i={i}
                        />
                      );
                    }
                  })
              : goal.milestones
                  .filter((m) => !m.completed)
                  .map((m, i) => {
                    {
                      return (
                        <MilestoneCard
                          milestone={m}
                          goal={goal}
                          key={Math.random() * 100}
                          i={i}
                        />
                      );
                    }
                  })}
          </div>
        </div>
        {/*3rd col*/}
        <div className="flex-none w-1/4 mx-2 right-0 top-20 bottom-0 text-sm h-full fixed p-5">
          <GoalDetails goal={goal} />
        </div>
      </div>
    </div>
  );
};

export default GoalPage;
