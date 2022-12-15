import React from 'react';

const Progress = ({ goal }) => {

  const percent = parseFloat(((goal.milestones.filter(m=>m.completed). length / goal.milestones.length) * 100).toFixed(2)) ;
  return (
    <>
        <small className="text-xs font-normal text-[#717171]">You’ve met <span className={"font-bold "}>{percent}% </span> of your goal</small>
      <div className="w-full bg-indigo-200 rounded h-1">
        <div
          className="bg-[#414FC7] rounded h-1 my-2"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </>
  );
};

export default Progress;
