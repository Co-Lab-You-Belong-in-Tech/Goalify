import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {modifyCategories, updateSelected} from '../redux/category/categorySlice';
import { plusI } from '../assets/icons';

const category = () => {
  const dispatch = useDispatch();
  const { categories, selected } = useSelector((state) => state.categories);
  return (
    <div className="flex gap-3 w-full rounded-full p-1 bg-slate-100">
      {categories.map(({ category, id }) => (
        <p
          className={`py-1 px-2 ${
            selected === id ? 'bg-white rounded-full' : ''
          }`}
          key={id}
          onClick={() => dispatch(updateSelected(id))}
        >
          {category}
        </p>
      ))}
      <img src={plusI} onClick={()=> {dispatch(modifyCategories([...categories, {id: Math.random * 1000, category: 'New Category'}]))}} />
    </div>
  );
};

export default category;
