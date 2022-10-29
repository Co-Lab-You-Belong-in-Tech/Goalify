import progress from "../../assets/icons/progress.svg";
import inProgress from "../../assets/icons/inProgress.svg";
import remove from "../../assets/icons/delete.svg";
import {editGoal} from "../../redux/goal/goalSlice.js";
import undo from "../../assets/icons/undo.svg";
import x from "../../assets/icons/x.svg";
import dots from "../../assets/icons/dots.svg";
import * as React from "react";

const Milestone  = () => {
    return (<div
        className={`border border-gray-200 rounded-b-xl bg-gray-100  mb-3 ${m.completed ? "pb-4" : ""}`}
        key={i}>
        <div className={"bg-grey "}>
            <div className={"bg-white p-4"}>
                {/*progress row*/}
                <div className={"flex items-center justify-between mb-3"}>
                    <div className={`rounded-xl ${background} w-fit p-2 flex  items-center`}>
                        {m.completed ? <>
                            <img className={"mr-2"} src={progress}/>
                            <p> Achieved {m.date}</p>
                        </> : <>
                            <img className={"mr-2"} src={inProgress}/>
                            <p> Work In Progress </p>
                        </>}
                    </div>
                    {(modify.state && modify.id === m.id) ? <div className={"flex items-center"}>
                        <button className={"mr-4"}>
                            <img className={"justify-end bg-indigo-50 rounded-full p-3"} src={remove}/>
                        </button>
                        <button className={"mr-4 flex bg-indigo-50 rounded-full p-1.5"} onClick={() => {
                            let milestones = goal.milestones.map((milestone) => {
                                if (milestone.id === m.id) {
                                    return {
                                        ...milestone, completed: false,
                                    };
                                } else {
                                    return {milestone}
                                }
                            })
                            dispatch(editGoal({...goal, milestones: [...milestones]}))
                        }}>
                            <img className={"justify-end mr-2"} src={undo}/>
                            <p> Undo </p>
                        </button>
                        <button onClick={() => setModify({state: false, id: null})} className={"mr-4 "}>
                            <img className={"justify-end"} src={x}/>
                        </button>
                    </div> : <button onClick={() => setModify({state: true, id: m.id})}>
                        <img className={"justify-end"} src={dots}/>
                    </button>}


                </div>
                {/*Content*/}
                <div className={"flex items-center "}>
                    <div
                        className={"w-10 h-10 border rounded-full w-fit p-2  border-slate-300 mr-2 flex "}>
                        <p className=" bold text-base font-black leading-5"> {String(i).padStart(2, '0')} </p>
                    </div>
                    <p className={"text-lg font-semibold"}> {m.content}</p>

                </div>
            </div>
            {/*Reflection*/}
            {m.completed ? reflection : <></>}
        </div>

    </div>)
}

export default Milestone