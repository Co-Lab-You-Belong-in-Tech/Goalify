import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editGoal } from '../../redux/goal/goalSlice';
import progress from '../../assets/icons/progress.svg';
import dots from '../../assets/icons/dots.svg';
import uploadImg from '../../assets/icons/uploadImg.svg';
import selectEmoji from '../../assets/icons/selectEmoji.svg';
import save from '../../assets/icons/save.svg';
import saveWhite from '../../assets/icons/saveWhite.svg';
import x from '../../assets/icons/x.svg';
import undo from '../../assets/icons/undo.svg';
import remove from '../../assets/icons/delete.svg';
import inProgress from '../../assets/icons/inProgress.svg';
import achieved from '../../assets/icons/cardAchieved.svg';
import show from '../../assets/icons/show.svg';
import hide from '../../assets/icons/hide.svg';

const MilestoneCard = ({ milestone, goal, i }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState({
    reflectionImhg: false,
    dotsMenu: false,
  });
  const [onChange, setOnChange] = useState(false);
  const [reflection, setReflection] = useState({
    content: milestone?.reflection?.content ?? null,
  });

  // const [selectedFile, setSelectedFile] = useState();
  // const [isFileLoaded, setIsFileLoaded] = useState(false);

  const uploadImgHandler = (event, id) => {
    // setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener('load', () => {
      localStorage.setItem(`${id}`, reader.result);
      // setReflection({...reflection, imgSrc: localStorage.getItem(`${milestone.id}`)})
      // setIsFileLoaded(true);
    });
  };

  const editGoalMilestone = () => {
    let milestones = goal.milestones.map((m) => {
      if (m.id === milestone.id) {
        return {
          ...m,
          completed: !m.completed,
        };
      } else {
        return m;
      }
    });
    dispatch(editGoal({ ...goal, milestones: [...milestones] }));
  };

  const reflectionComponent = (
    <div>
      <div className={'pl-4 pb-4 mb-5 flex bg-white flex-col'}>
        {visible.reflectionImhg && localStorage.getItem(`${milestone.id}`) ? (
          <img
            className={`h-96 object-contain`}
            src={localStorage.getItem(`${milestone.id}`)}
          />
        ) : null}

        <div className={'flex mt-4 justify-between'}>
          <div className={'flex'}>
            {/**/}
            <input
              type="file"
              id="uploadImg-btn"
              className={'hidden'}
              //
            />
            <label
              htmlFor="uploadImg-btn"
              onChange={(e) => {
                uploadImgHandler(e, milestone.id);
              }}
            >
              <div
                className={
                  'h-9  rounded-3xl w-fit p-2 bg-[#F4F6FF]  mr-4 hover:bg-blue-100 cursor-pointer'
                }
              >
                <img src={uploadImg} />
              </div>
            </label>
            <div
              className={'h-8 bg-[#F4F6FF]  rounded-3xl w-fit p-2  mr-4'}
            >
              <img src={selectEmoji} />
            </div>
          </div>
          <button
            onClick={() => {
              setVisible({
                ...visible,
                reflectionImhg: !visible.reflectionImhg,
              });
            }}
          >
            <div
              className={
                'hover:bg-blue-100 font-semibold text-xs h-9                                                                                                  rounded-3xl w-fit p-2 bg-[#F4F6FF] mr-2 flex justify-between items-center'
              }
            >
              <img
                className={'mr-3'}
                src={visible.reflectionImhg ? hide : show}
              />
              <p> {visible.reflectionImhg ? 'Hide image ' : ' View image'}</p>
            </div>
          </button>
        </div>
      </div>

      <div className={'pl-4'}>
        <div className={' bg-gray-100 text-xs w-full pr-4  mb-3'}>
          <p><b> Reflection</b> </p>
          <input
            onChange={(e) => {
              setOnChange(true);
              setReflection({ ...reflection, content: e.target.value });
            }}
            className={
              'my-2 bg-gray-50 border border-gray-300 w-full p-2 rounded-lg'
            }
            value={`${reflection.content ?? ''}`}
          />
        </div>
        <button
          className={`${reflection.content && !onChange ? 'hidden' : 'block'} ${
            onChange ? 'bg-[#414FC7] text-white' : 'bg-gray-200'
          } bg-gray-200 flex p-2 rounded-3xl text-sm`}
          onClick={() => {
            setOnChange(false);
            let milestones = goal.milestones.map((m) => {
              if (m.id === milestone.id) {
                return {
                  ...m,
                  reflection: reflection,
                };
              } else {
                return m;
              }
            });
            dispatch(editGoal({ ...goal, milestones: [...milestones] }));
          }}
        >
          <img className={'mr-4'} src={onChange ? saveWhite : save} />
          <p><b> Save reflection</b></p>
        </button>
      </div>
    </div>
  );
  const background = milestone.completed ? ' bg-yellow-50' : 'bg-indigo-50 ';
  return (
    <div
      className={` border border-gray-200 rounded-xl bg-gray-100  mb-3 ${
        milestone.completed ? 'pb-4' : ''
      }`}
    >
      <div className={'bg-grey '}>
        <div className={'bg-white p-4'}>
          {/*progress row*/}
          <div className={'flex items-center justify-between mb-3'}>
            <div
              className={`rounded-md ${background} w-fit p-1.5 flex  items-center`}
            >
              {milestone.completed ? (
                <>
                  <img className={'mr-2'} src={progress} />
                  <p className={'text-xs font-medium'}>
                   Achieved {milestone.date}</p>
                </>
              ) : (
                <>
                  <div className={'flex items-center'}>
                    <img className={'mr-2'} src={achieved} />
                    <p className={'text-xs font-medium'}>
                     Work In Progress </p>
                  </div>
                </>
              )}
            </div>
            {visible.dotsMenu ? (
              <div className={'flex items-center'}>
                <button className={'mr-4'}>
                  <img
                    className={'justify-end bg-indigo-50 rounded-full p-3'}
                    src={remove}
                  />
                </button>

                <button
                  className={`hover:bg-indigo-100 mr-4 flex bg-indigo-50 rounded-full py-1.5 px-4 `}
                  onClick={editGoalMilestone}
                >
                  <img
                    className={'justify-end mr-2'}
                    src={milestone.completed ? undo : achieved}
                  />
                  <p> {milestone.completed ? 'Undo' : 'Mark as achieved'} </p>
                </button>
                <button
                  onClick={() => setVisible({ ...visible, dotsMenu: false })}
                  className={'mr-4'}
                >
                  <img className={'justify-end'} src={x} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setVisible({ ...visible, dotsMenu: true })}
              >
                <img className={'justify-end'} src={dots} />
              </button>
            )}
          </div>
          {/*Content*/}
          <div className={'flex items-center '}>
            <div
              className={
                'h-15 w-10 border rounded-3xl w-fit p-2  border-slate-200 mr-2 flex '
              }
            >
              <p className=" bold text-base font-bold leading-5">
                {' '}
                {String(i + 1).padStart(2, '0')}{' '}
              </p>
            </div>
            <p className={'text-lg font-semibold'}> {milestone.content}</p>
          </div>
        </div>
        {/*Reflection*/}
        {milestone.completed ? reflectionComponent : <></>}
      </div>
    </div>
  );
};

export default MilestoneCard;
