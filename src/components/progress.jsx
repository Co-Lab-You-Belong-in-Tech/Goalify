import React from 'react';

const Progress = ({ goal }) => {
  const percent = (goal.currentMilestone / goal.milestones.length) * 100;
  return (
    <div className="">
      <small className="text-xs">You’ve met {percent}% of your goal</small>
      <div className="w-full bg-gray-200 rounded h-1">
        <div
          className="bg-blue-600 rounded h-1"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
