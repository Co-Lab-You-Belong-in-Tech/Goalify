import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateGoalMilestone, deleteGoalMilestone} from '../../redux/goal/goalSlice';
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
import Reflection from "./Reflection.jsx";


const MilestoneCard = ({milestone, goal, i}) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState({
        reflectionImhg: false,
        dotsMenu: false,
    });

    function handleDelete(goal, milestoneId) {
        dispatch(deleteGoalMilestone({
            goal,
            currentMilestoneId: milestoneId,
        }))
    }

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
                                    <img className={'mr-2'} src={progress}/>
                                    <p className={'text-xs font-medium'}>
                                        Achieved {milestone.date}</p>
                                </>
                            ) : (
                                <>
                                    <div className={'flex items-center'}>
                                        <img className={'mr-2'} src={achieved}/>
                                        <p className={'text-xs font-medium'}>
                                            Work In Progress </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {visible.dotsMenu ? (
                            <div className={'flex items-center'}>
                                <button className={'mr-4'} onClick={() => {
                                    handleDelete(goal, milestone.id)
                                }}>
                                    <img
                                        className={'hover:bg-red-100 justify-end bg-red-50 rounded-full p-3'}
                                        src={remove}
                                    />
                                </button>

                                <button
                                    className={`hover:bg-[#FFFDF8] hover:scale-[.95] mr-4 flex bg-indigo-50 text-sm rounded-full py-1.5 px-2 `}
                                    onClick={() => {
                                        dispatch(updateGoalMilestone({
                                            goal,
                                            currentMilestoneId: milestone.id,
                                            milestoneUpdates: {completed: !milestone.completed}
                                        }))
                                    }}
                                >
                                    <img
                                        className={'justify-end mr-2 '}
                                        src={milestone.completed ? undo : achieved}
                                    />
                                    <p className={'text-sm font-semibold '}>   {milestone.completed ? 'Undo' : 'Mark as achieved'}</p>
                                </button>

                                <button
                                    onClick={() => setVisible({...visible, dotsMenu: false})}
                                    className={'mr-4'} S
                                >
                                    <img className={'justify-end'} src={x}/>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setVisible({...visible, dotsMenu: true})}
                            >
                                <img className={'justify-end'} src={dots}/>
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
                            <p className=" bold text-base font-semibold leading-5">
                                {' '}
                                {String(i + 1).padStart(2, '0')}{' '}
                            </p>
                        </div>
                        <p className={'text-base font-medium'}> {milestone.content}</p>
                    </div>
                </div>
                {/*Reflection*/}
                {milestone.completed ? <Reflection visible={visible} setVisible={setVisible} milestone={milestone} goal={goal} /> : <></>}
            </div>
        </div>
    );
};

export default MilestoneCard;
