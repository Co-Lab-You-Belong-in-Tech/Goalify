import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProgress } from '../../redux/goal/goalSlice';
import Progress from '../../components/progress';
import Button from '../../components/button';
import { progressI, unprogressI, completeI } from '../../assets/icons';

const GoalDetails = ({ goal }) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);
  const handleProgress = () => {
    dispatch(updateProgress(goal));
    setComplete(false);
  };
  return (
    <>
      <div className="w-80 p-2 border border-slate-100 bg-white w rounded">
        <div className="pb-1">
          <div className="rounded flex justify-between items-center py-2 px-1 mt-4">
            <div className="flex px-1 pt-1">
              <img className="w-5 h-5" src={progressI} alt="progress" />
              <span className="pl-2 text-sm">
                {goal.currentMilestone}/{goal.milestones.length} Milestones
                Reached
              </span>
            </div>
          </div>
          <div className="px-1">
            <Progress goal={goal} />
          </div>
        </div>
        <div className="my-3 text-sm ">Next Milestone</div>
        <p className="text-xs">
          When you’ve completed your next milestone, you can check it as done to
          update your goal
        </p>
        <div className="bg-blue-50 py-5 rounded px-2 my-5 flex gap-3">
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
            Milestone {goal.currentMilestone + 1}:
            {goal.milestones[goal.currentMilestone].content.substring(0, 24)}...
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
