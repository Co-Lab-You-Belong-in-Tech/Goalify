import React from 'react';
import Button from '../../components/UI/button';
import prgress from '../../assets/icons/progress.svg';
import dots from '../../assets/icons/dots.svg';
import eye from '../../assets/icons/eye.svg';
import play from '../../assets/icons/Play.svg';

const Card = ({ item }) => {
  return (
    <div className="w-96 p-2 border border-slate-400 w rounded">
      <div className="flex justify-between mb-4">
        <img className="w-8 h-8" src={play} alt="play" />
        <img className="w-8 h-8" src={dots} alt="dots" />
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
