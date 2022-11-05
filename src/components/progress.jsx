import React from 'react';

const Progress = ({ goal }) => {
  const percent = (goal.currentMilestone / goal.milestones.length) * 100;
  return (
    <>
        <small className="text-xs font-bold text-[#717171]">You’ve met <span className={"font-extrabold "}>{percent}% </span> of your goal</small>
      <div className="w-full bg-gray-200 rounded h-1">
        <div
          className="bg-[#414FC7] rounded h-1 my-2"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </>
  );
};

export default Progress;
