import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editGoal} from '../../redux/goal/goalSlice';
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

const MilestoneCard = ({milestone, goal, i}) => {
    const dispatch = useDispatch();
    const [modify, setModify] = useState({state: false});
    const [onChange, setOnChange] = useState(false);
    const [reflection, setReflection] = useState({
        content: milestone?.reflection?.content ??  null
    });

    const reverseComplete = () => {
        let milestones = goal.milestones.map((m) => {
            if (m.id === milestone.id) {
                return {
                    ...m, completed: !m.completed,
                };
            } else {
                return m;
            }
        });
        dispatch(editGoal({...goal, milestones: [...milestones]}));
    }

    const reflectionComponent = (<div>
            <div className={'pl-4 pb-4 mb-5 flex bg-white'}>
                <div className={'h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4'}>
                    <img src={uploadImg}/>
                </div>
                <div className={'h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4'}>
                    <img src={selectEmoji}/>
                </div>
            </div>
            <div className={'pl-4'}>
                <div className={' bg-gray-100 w-full pr-4 mb-3'}>
                    <p> Reflection </p>
                    <input
                        onChange={(e) => {
                            setOnChange(true);
                            setReflection({...reflection, content: e.target.value})
                        }}
                        className={'my-2 bg-gray-100 border border-gray-300 w-full p-2 rounded-l'}
                        value={`${reflection.content ?? ''}`}
                    />
                </div>
                <button
                    className={`${reflection.content && !onChange ? 'hidden' : 'block'} ${onChange ? 'bg-indigo-700 text-white' : 'bg-gray-200'} bg-gray-200 flex p-2 rounded-xl`}
                    onClick={() => {
                        setOnChange(false)
                        let milestones = goal.milestones.map((m) => {
                            if (m.id === milestone.id) {
                                return {
                                    ...m, reflection: reflection,
                                };
                            } else {
                                return m;
                            }
                        });
                        dispatch(editGoal({...goal, milestones: [...milestones]}));
                    }}
                >
                    <img className={'mr-4'} src={onChange ? saveWhite : save}/>
                    <p> Save reflection</p>
                </button>
            </div>
        </div>);
    const background = milestone.completed ? ' bg-yellow-50' : 'bg-indigo-50 ';
    return (<div
            className={`border border-gray-200 rounded-b-xl bg-gray-100  mb-3 ${milestone.completed ? 'pb-4' : ''}`}
        >
            <div className={'bg-grey '}>
                <div className={'bg-white p-4'}>
                    {/*progress row*/}
                    <div className={'flex items-center justify-between mb-3'}>
                        <div
                            className={`rounded-xl ${background} w-fit p-2 flex  items-center`}
                        >
                            {milestone.completed ? (<>
                                    <img className={'mr-2'} src={progress}/>
                                    <p> Achieved {milestone.date}</p>
                                </>) : (<>
                                    <button className={"flex items-center"} onClick={reverseComplete}>
                                        <img className={'mr-2'} src={inProgress}/>
                                        <p> Work In Progress </p>
                                    </button>
                                </>)}
                        </div>
                        {modify.state && modify.id === milestone.id ? (<div className={'flex items-center'}>
                                <button className={'mr-4'}>
                                    <img
                                        className={'justify-end bg-indigo-50 rounded-full p-3'}
                                        src={remove}
                                    />
                                </button>
                                <button
                                    className={`${!milestone.completed ? 'hidden' : 'block'} mr-4 flex bg-indigo-50 rounded-full p-1.5`}
                                    onClick={reverseComplete}
                                >
                                    <img className={'justify-end mr-2'} src={undo}/>
                                    <p> Undo </p>
                                </button>
                                <button
                                    onClick={() => setModify({state: false, id: null})}
                                    className={'mr-4 '}
                                >
                                    <img className={'justify-end'} src={x}/>
                                </button>
                            </div>) : (<button
                                onClick={() => setModify({state: true, id: milestone.id})}
                            >
                                <img className={'justify-end'} src={dots}/>
                            </button>)}
                    </div>
                    {/*Content*/}
                    <div className={'flex items-center '}>
                        <div
                            className={'h-10 border rounded-full w-fit p-2  border-slate-300 mr-2 flex '}
                        >
                            <p className=" bold text-base font-black leading-5">
                                {' '}
                                {String(i).padStart(2, '0')}{' '}
                            </p>
                        </div>
                        <p className={'text-lg font-semibold'}> {milestone.content}</p>
                    </div>
                </div>
                {/*Reflection*/}
                {milestone.completed ? reflectionComponent : <></>}
            </div>
        </div>);
};

export default MilestoneCard;
