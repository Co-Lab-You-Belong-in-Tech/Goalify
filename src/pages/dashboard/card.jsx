import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  editGoal,
  removeGoal,
  updateGoalStatus,
} from '../../redux/goal/goalSlice';
import useToggle from '../../hooks/useToggle';
import Button from '../../components/button';
import Progress from '../../components/progress';
import Celebrate from '../../components/celebrate';
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
  congrts,
} from '../../assets/icons';

const Card = ({ goal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [action, setAction] = useState(false);
  const [complete, setComplete] = useState(false);
  const [view, toggleView] = useToggle(false);
  const [status, toggleStatus] = useToggle(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const indexOfFirstCompleted = goal.milestones.indexOf(
    goal.milestones.filter((m) => !m.completed)[0]
  );
  const getCurrentMilestone =
    indexOfFirstCompleted === -1
      ? goal.milestones.length
      : indexOfFirstCompleted;

  const handleCelebrations = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 6500);
  };

  const actionView = action ? (
    <div className="flex gap-2">
      <Button
        onClick={() => dispatch(removeGoal(goal.id))}
        className="w-8 pl-2 btn-primary bg-red-100 font-semibold text-red-600 py-2 hover:scale-90"
      >
        <div>
          <img src={deleteI} alt="delete" className="pr-2" />
        </div>
      </Button>
      <Button
        onClick={() => {
          navigate(`/goals/${goal.id}`);
        }}
        className="w-8 pl-2 btn-primary bg-[#F4F6FF]  font-semibold text-slate-8000 py-2 text-sm hover:scale-90"
      >
        <img src={editI} alt="editI" className="pr-2" />
      </Button>
    </div>
  ) : (
    <img
      className="w-8 h-8 hover:cursor-pointer hover:scale-90"
      onClick={() => setAction((prev) => !prev)}
      src={dotsI}
      alt="dots"
    />
  );

  const handleProgress = () => {
    let milestones = goal.milestones.map((milestone) => {
      if (milestone.id === goal.milestones[getCurrentMilestone].id) {
        return {
          ...milestone,
          completed: true,
        };
      } else {
        return milestone;
      }
    });
    dispatch(editGoal({ ...goal, milestones: [...milestones] }));
    setComplete(false);
    if (getCurrentMilestone === goal.milestones.length - 1) {
      handleCelebrations();
    }
  };
  return (
    <div className="w-80 p-3 border border-gray-500 bg-white border-opacity-10 rounded-lg hover:border-indigo-100">
      <div className="flex justify-between mb-2 ">
        <div>
          {goal.categoryId === 1 ? (
            <img
              className="w-8 h-8 hover:scale-90 cursor-pointer"
              src={playI}
              alt="playI"
              onClick={() => {
                toggleStatus();
                dispatch(updateGoalStatus({ ...goal, categoryId: 0 }));
              }}
            />
          ) : (
            <img
              className="w-8 h-8 hover:scale-90 cursor-pointer"
              src={pauseI}
              alt="pauseI"
              onClick={() => {
                toggleStatus();
                dispatch(updateGoalStatus({ ...goal, categoryId: 1 }));
              }}
            />
          )}
        </div>
        <div>{actionView}</div>
      </div>
      <div className="mt-3  text-xs  font-normal  text-[#717171]">
        Your goal
      </div>
      
      <h3 className="font-semibold text-base ">{goal.content}</h3>
      <div className="bg-gray-50 pb-1 pr-1.5 rounded">
        <div className="rounded flex justify-between items-center py-2 px-1 mt-3">
          <div className="flex px-1 pt-1">
            <img className="w-5 h-5" src={progressI} alt="progress" />
            <span className="pl-2 text-xs font-normal text-[#717171]">
              {getCurrentMilestone}/{goal.milestones.length} Milestones Reached
            </span>
          </div>
          {view ? (
            <span>
              <img
                onClick={toggleView}
                className="w-4 h-4 hover:cursor-pointer"
                src={uneyeI}
                alt="eyeI"
              />
            </span>
          ) : (
            <span>
              <img
                onClick={toggleView}
                className="w-4 h-4 hover:cursor-pointer"
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
      <div className="mt-3  text-xs  font-medium  text-[#717171] pb-1">
        Next Milestone
      </div>
      <p className="text-xs text-[#717171]">
        When you’ve completed your next milestone, you can check it as done to
        update your goal
      </p>
      <div          onClick={() => setComplete(true)}

        className={` bg-[#F4F6FF] hover:cursor-pointer rounded px-3 my-2 flex gap-2 ${
          getCurrentMilestone === goal.milestones.length ? 'py-1' : 'py-4'
        }`}
      >
        {getCurrentMilestone === goal.milestones.length ? (
          <img className="w-10" src={congrts} alt="completeI" />
        ) : complete ? (
          <img className="w-5" src={completeI} alt="completeI" />
        ) : (
          <img
            onClick={() => setComplete(true)}
            src={unprogressI}
            alt="unprogressI"
            className="w-5"
          />
        )}
        
        <p onClick={() => setComplete(true)}
 className="text-xs font-medium  flex items-center hover: cursor-pointer">
          {getCurrentMilestone === goal.milestones.length
            ? <b><i>Congratulations</i> 🥳🎉🎊 </b>
            : `Milestone   ${getCurrentMilestone + 1}: ${goal?.milestones[
                getCurrentMilestone
              ]?.content?.substring(0, 24)}...`}
          {isAlertVisible && <Celebrate />}
        </p>
      </div>
      {getCurrentMilestone !== goal.milestones.length ? (
        <Button
          disabled={!complete}
          onClick={handleProgress}
          className="btn-primary btn-progress text-sm font-semibold"
        >
          Update Progress
        </Button>
      ) : null}
    </div>
  );
};

export default Card;
