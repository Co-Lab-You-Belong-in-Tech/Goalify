import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {modifyCategories, modifyCategory, updateSelected} from '../redux/category/categorySlice';
import dots from '../assets/icons/dots.svg'


import { plusI } from '../assets/icons';

const category = () => {
  const dispatch = useDispatch();
  const { categories, selected } = useSelector((state) => state.categories);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState()

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      setIsEditing(false);
      const newCategories = categories.map((c) => {
        console.log({i:categories.indexOf(c), selected})
        if (categories.indexOf(c) === selected) {
          return {
            ...c, category: value,
          };
        }

        return c;
      })
      console.log(newCategories)
      dispatch(modifyCategory(newCategories));
    }
  };

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex gap-3 w-full rounded-full p-1 bg-slate-100">
      {categories.map(({ category, id }) => (
          isEditing && id == selected? (
                <input
                    autoFocus
                    placeholder={category}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    className={"py-1 px-2 border-solid border border-gray-100 rounded-3xl "}
                    type="text"
                />
            ) : (
              <div
                className={`py-1 px-2 hover:cursor-pointer flex justify-between w-[10rem] ${
                  selected === id ? 'bg-white border-solid border border-gray-200 rounded-3xl ' : ''
                }`}
                key={id}
                onClick={()=>dispatch(updateSelected(id))}


              >
                {category}
                {selected === id ?
                <img className={"w-8"} src={dots} onClick={()=>{
                  handleClick();
                  dispatch(updateSelected(id))
                }}/> : null }
              </div>
            )

      ))}
      <img src={plusI} onClick={()=> {
        dispatch(modifyCategories(
            [...categories,
              {id: categories.length, category: 'New Category'}]));
        dispatch(updateSelected(categories.length-1)
        );
      }

      } />
    </div>
  );
};

export default category;
