import { useState } from 'react';
import {useDispatch, } from 'react-redux';
import Progress from '../../components/progress';
import Button from '../../components/button';
import { progressI, unprogressI, completeI } from '../../assets/icons';
import {editGoal} from "../../redux/goal/goalSlice.js";

const GoalDetails = ({ goal }) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);
  const indexOfFirstCompleted = goal.milestones.indexOf(goal.milestones.filter(m=>!m.completed)[0])
  const getCurrentMilestone = (indexOfFirstCompleted ===-1)? goal.milestones.length-1 : indexOfFirstCompleted;
  console.log(getCurrentMilestone)
  console.log(goal.milestones[1])
  console.log(goal.milestones[getCurrentMilestone])
    console.log(goal.milestones)
    const handleProgress = () => {
    // dispatch(updateProgress(goal));
      let milestones = goal.milestones.map((milestone) => {
        if (milestone.id === goal.milestones[getCurrentMilestone].id) {
          return {
            ...milestone,
            completed: true,
          };
        } else {
          return milestone ;
        }
      });
      dispatch(
          editGoal({ ...goal, milestones: [...milestones] })
      );
    setComplete(false);
  };
  return (
    <>
      <div className="w-80 pb-4 px-3 border border-gray-200 bg-white w rounded min-w-full">
          <div className="rounded flex justify-between items-center pb-3  mt-4">
            <div className="flex  pt-1">
              <img className="w-5 h-5 mr-1.5" src={progressI} alt="progress" />
              <span className="pl-1 font-semibold text-[#415472] leading-5 text-base ">
                {goal.milestones.filter(m=>m.completed).length}/{goal.milestones.length} Milestones
                Reached
              </span>
            </div>
          </div>
          <div className="px-1">
            <Progress goal={goal} />
          </div>
        <div className="mt-3 mb-1.5 text-sm font-semibold text-gray-500">Next Milestone</div>
        <p className="text-xs">
          When you’ve completed your next milestone, you can check it as done to
          update your goal
        </p>
        <div className="bg-blue-50 py-3 rounded px-2 my-3 flex gap-3">
          {complete ? (
            <img className="w-5" src={completeI} alt="completeI" />
          ) : (
            <img
              onClick={() => setComplete(true)}
              src={unprogressI}
              alt="unprogressI"
              className="w-5"
            />
          )}
          <p className="text-sm">
            Milestone {getCurrentMilestone + 1} :
            {' ' + goal.milestones[getCurrentMilestone].content.substring(0, 24)}...
          </p>
        </div>

        <Button
          disabled={!complete}
          onClick={handleProgress}
          className="btn-primary btn-progress font-semibold"
        >
          Update Progress
        </Button>
      </div>
    </>
  );
};

export default GoalDetails;
