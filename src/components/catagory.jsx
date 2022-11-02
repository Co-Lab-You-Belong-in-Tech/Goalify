import React, { useState } from 'react';
import { plusI } from '../assets/icons';

const Catagory = () => {
  const [selected, setSelected] = useState('active');
  const [data, setData] = useState([]);
  const catagories = [
    { id: 'active', status: 'Active' },
    { id: 'paused', status: 'paused' },
  ];
  return (
    <div className="flex gap-3 w-full rounded-full p-1 bg-slate-100">
      {catagories.map(({ status, id }) => (
        <button
          className={`py-1 px-2 ${
            selected === id ? 'bg-white rounded-full' : ''
          }`}
          key={id}
          onClick={() => setSelected(id)}
        >
          {status}
        </button>
      ))}
      <img src={plusI} />
    </div>
  );
};

export default Catagory;
