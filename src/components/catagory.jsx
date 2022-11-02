import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelected } from '../redux/catagory/catagorySlice';
import { plusI } from '../assets/icons';

const Catagory = () => {
  const dispatch = useDispatch();
  const { catagories, selected } = useSelector((state) => state.catagories);
  return (
    <div className="flex gap-3 w-full rounded-full p-1 bg-slate-100">
      {catagories.map(({ catagory, id }) => (
        <button
          className={`py-1 px-2 ${
            selected === id ? 'bg-white rounded-full' : ''
          }`}
          key={id}
          onClick={() => dispatch(updateSelected(id))}
        >
          {catagory}
        </button>
      ))}
      <img src={plusI} />
    </div>
  );
};

export default Catagory;
