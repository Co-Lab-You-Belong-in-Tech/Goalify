import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import {
  modifyCategories,
  modifyCategory,
  updateSelected,
} from '../redux/category/categorySlice';
import dots from '../assets/icons/dots.svg';

import { plusI } from '../assets/icons';

const category = () => {
  const dispatch = useDispatch();
  const { categories, selected } = useSelector((state) => state.categories);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState();

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      const newCategories = categories.map((c) => {
        console.log({ i: categories.indexOf(c), selected });
        if (categories.indexOf(c) === selected) {
          return {
            ...c,
            category: value,
          };
        }

        return c;
      });
      console.log(newCategories);
      dispatch(modifyCategory(newCategories));
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex gap-3 w-full  text-base font-medium rounded-full p-1 bg-[#F8F8F8] ">
      {categories.map(({ category, id }) =>
        isEditing && id == selected ? (
          <Tooltip title="press enter to save change" key={id}>
            <input
              autoFocus
              placeholder={category}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              className={
                'py-1 px-2 border-solid border border-blue-50 rounded-3xl '
              }
              type="text"
            />
          </Tooltip>
        ) : (
          <div
            className={`select-none py-1 px-2 hover:cursor-pointer flex justify-between w-[10rem]  hover:scale-[.95] ${
              selected === id
                ? 'bg-white border-solid border border-gray-200 rounded-3xl '
                : ''
            }`}
            key={id}
            onClick={() => dispatch(updateSelected(id))}
          >
            {category}
            {selected === id ? (
              <img
                className={'w-8'}
                src={dots}
                onClick={() => {
                  handleClick();
                  dispatch(updateSelected(id));
                }}
              />
            ) : null}
          </div>
        )
      )}
      <img className={' bg-[#FaFaFa] border p-2 hover:scale-[.85] cursor-pointer  rounded-3xl '}
        src={plusI}
        onClick={() => {
          dispatch(
            modifyCategories([
              ...categories,
              { id: categories.length, category: 'New Category' },
            ])
          );
          dispatch(updateSelected(categories.length - 1));
        }}title="Click to add a new goal category"
        data-tooltip="This is the tooltip content"
      />
    </div>
  );
};

export default category;
