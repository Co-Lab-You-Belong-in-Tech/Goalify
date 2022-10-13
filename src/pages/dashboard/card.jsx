import { useState } from 'react';
import Button from '../../components/button';
import prgress from '../../assets/icons/progress.svg';
import dots from '../../assets/icons/dots.svg';
import eye from '../../assets/icons/eye.svg';
import play from '../../assets/icons/Play.svg';
import deleteI from '../../assets/icons/delete.svg';
import editI from '../../assets/icons/edit.svg';
import { removeGoal, addGoal, editGoal } from '../../redux/goal/goalSlice';
import { useDispatch } from 'react-redux';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [action, setAction] = useState(false);
  const actionView = action ? (
    <div className="flex gap-2">
      <Button
        onClick={() => dispatch(removeGoal(item.id))}
        className="btn-primary bg-red-300 font-semibold text-red-600 py-2"
      >
        <img src={deleteI} alt="delete" className="pr-2" />
        <span> Delete</span>
      </Button>
      <Button
        onClick={() =>
          dispatch(editGoal({ id: item.id, goal: 'hello new omar' }))
        }
        className="btn-primary bg-blue-50 font-semibold text-slate-800 w-24 py-2 text-sm"
      >
        <img src={editI} alt="edit" className="pr-2" />
        <span> Edit</span>
      </Button>
    </div>
  ) : (
    <img
      className="w-8 h-8 hover:cursor-pointer"
      onClick={() => setAction((prev) => !prev)}
      src={dots}
      alt="dots"
    />
  );
  return (
    <div className="w-96 p-2 border border-slate-400 w rounded">
      <div className="flex justify-between mb-4">
        <div>
          <img className="w-8 h-8" src={play} alt="play" />
        </div>
        <div>{actionView}</div>
      </div>
      <small>Your goal</small>
      <h3 className="font-semibold">{item.goal}</h3>
      <div className="bg-gray-100 rounded flex justify-between items-center py-4 px-1 mt-4">
        <div className="flex">
          <img className="w-5 h-5" src={prgress} alt="progress" />
          <span className="pl-2">2/6 Milestones Reached</span>
        </div>
        <span>
          <img className="w-5 h-5" src={eye} alt="eye" />
        </span>
      </div>
      <div className="my-5">Next Milestone</div>
      <p className="text-xs">
        When you’ve completed your next milestone, you can check it as done to
        update your goal
      </p>
      <div className="bg-blue-50 py-5 rounded px-1 my-5">
        Milestone 3: Get above a B+ on all midterms
      </div>
      <Button className="btn-primary">Update Progress</Button>
    </div>
  );
};

export default Card;
