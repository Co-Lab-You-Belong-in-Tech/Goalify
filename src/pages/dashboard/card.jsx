import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeGoal, updateProgress } from '../../redux/goal/goalSlice';
import useToggle from '../../hooks/useToggle';
import Button from '../../components/button';
import Progress from '../../components/progress';
import {
  progressI,
  dotsI,
  playI,
  eyeI,
  unprogressI,
  completeI,
  editI,
  deleteI,
  uneyeI,
  pauseI,
} from '../../assets/icons';

const Card = ({ goal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [action, setAction] = useState(false);
  const [complete, setComplete] = useState(false);
  const [view, toggleView] = useToggle(false);
  const [status, toggleStatus] = useToggle(false);
  const actionView = action ? (
    <div className="flex gap-2">
      <Button
        onClick={() => dispatch(removeGoal(goal.id))}
        className="w-8 pl-2 btn-primary bg-red-300 font-semibold text-red-600 py-2"
      >
        <div>
          <img src={deleteI} alt="delete" className="pr-2" />
        </div>
      </Button>
      <Button
        onClick={() => {
          navigate(`/goals/${goal.id}`);
        }}
        className="w-8 pl-2 btn-primary bg-blue-50 font-semibold text-slate-800 py-2 text-sm"
      >
        <img src={editI} alt="editI" className="pr-2" />
      </Button>
    </div>
  ) : (
    <img
      className="w-8 h-8 hover:cursor-pointer"
      onClick={() => setAction((prev) => !prev)}
      src={dotsI}
      alt="dots"
    />
  );

  const handleProgress = () => {
    dispatch(updateProgress(goal));
    setComplete(false);
  };
  return (
    <div className="w-80 p-2 border border-slate-400 w rounded">
      <div className="flex justify-between mb-4">
        <div>
          {status ? (
            <img
              className="w-8 h-8"
              src={playI}
              alt="playI"
              onClick={toggleStatus}
            />
          ) : (
            <img
              className="w-8 h-8"
              src={pauseI}
              alt="pauseI"
              onClick={toggleStatus}
            />
          )}
        </div>
        <div>{actionView}</div>
      </div>
      <small>Your goal</small>
      <h3 className="font-semibold">{goal.content}</h3>
      <div className="bg-gray-100 pb-1">
        <div className="rounded flex justify-between items-center py-2 px-1 mt-4">
          <div className="flex px-1 pt-1">
            <img className="w-5 h-5" src={progressI} alt="progress" />
            <span className="pl-2 text-sm">
              {goal.currentMilestone}/{goal.milestones.length} Milestones
              Reached
            </span>
          </div>
          {view ? (
            <span>
              <img
                onClick={toggleView}
                className="w-5 h-5"
                src={uneyeI}
                alt="eyeI"
              />
            </span>
          ) : (
            <span>
              <img
                onClick={toggleView}
                className="w-5 h-5"
                src={eyeI}
                alt="eyeI"
              />
            </span>
          )}
        </div>
        {view ? (
          <div className="px-1">
            <Progress goal={goal} />
          </div>
        ) : (
          ''
        )}
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
  );
};

export default Card;
