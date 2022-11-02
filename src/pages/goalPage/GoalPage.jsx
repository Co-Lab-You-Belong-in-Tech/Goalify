import {useParams} from 'react-router-dom';
import * as React from 'react';
import {useSelector} from 'react-redux';
import MilestoneCard from './milestoneCard';
import plus from '../../assets/icons/plus.svg';
import dir from '../../assets/icons/dir.svg';
import share from '../../assets/icons/share.svg';
import {useState} from "react";

const GoalPage = () => {
    let params = useParams();
    const goals = useSelector((state) => state.goals);
    const goal = goals.find((goal) => goal.id == params.goalId);
    const [category, setCategory] = useState('achieved')
    return (// wrap
        <div className={'bg-gray-100 relative h-full w-full'}>
            {/*header*/}
            <div className="bg-yellow-100 fixed top-0 left-0 w-full h-20 py-5 px-20 flex  justify-between items-center">
                <div className={"text-lg w-14  h-14 flex justify-center items-center rounded-3xl"} style={{
                    background: "radial-gradient(80.62% 68.16% at 49.94% 31.84%, #FEFFDF 20.31%, #B4BDEC 100%)"
                }}>
                    <p className={"font-bold text-2xl leading-8"}> G </p>
                </div>
                <div className={"flex justify-center items-center gap-4"}>
                    <div className={"bg-indigo-800 w-10 h-10 flex justify-center items-center rounded-3xl"}><img
                        src={plus}/></div>
                    <div className={"bg-gray-200 w-10 h-10 flex justify-center items-center rounded-3xl"}><img
                        src={dir}/></div>
                    <div className={"bg-gray-200 w-10 h-10 flex justify-center items-center rounded-3xl"}><img
                        src={share}/></div>
                    <div
                        className={"bg-red-100 w-10 h-10 flex justify-center items-center rounded-3xl font-bold text-2xl leading-8"}>
                        <p> A </p></div>
                </div>
            </div>
            {/*body wrap*/}
            <div className="h-full  p-5  mt-20">
                {/*1st col*/}
                <div className="w-1/4  left-0 top-20 bottom-0 h-full fixed flex flex-col items-center py-5 p-7">
                    <div className={'mb-3 p-3  bg-white min-w-full'}>
                        <p className="font-semibold text-slate-600 leading-5 text-base mb-4">
                            Your Motivation
                        </p>
                        <blockquote
                            suppressContentEditableWarning={true}
                            className={'bg-slate-100 p-3'}
                            contentEditable={"true"}
                        >
                            {goal.motivation}
                        </blockquote>
                    </div>
                </div>
                {/*2nd col*/}
                <div className="grow   h-full w-2/4 mx-[24%]">
                    <p className={'text-3xl font-bold leading-9 mb-8'}>{goal.content}</p>
                    <div
                        className="border border-2 border-gray-200 w-fit rounded-full p-2 flex  font-semibold gap-3 text-slate-600 leading-5  mb-4">
                        <button onClick={() => {
                            setCategory('achieved')
                        }}
                                className={`${category == "achieved" ? "bg-white" : null} rounded-3xl p-2 text-xl `}> Achieved
                            milestones
                        </button>
                        <button onClick={() => {
                            setCategory('in-progress')
                        }} className={`${category == "in-progress" ? "bg-white" : null} rounded-3xl p-2 text-xl`}> In-progress milestones</button>
                    </div>
                    {goal.milestones.map((m, i) => (

                        <MilestoneCard
                            milestone={m}
                            goal={goal}
                            key={Math.random() * 100}
                            i={i}
                        />))}
                </div>
                {/*3rd col*/}
                <div className="flex-none w-1/4 h-14 mx-2 right-0 top-20 bottom-0  h-full fixed p-5">03</div>
            </div>
        </div>);
};

export default GoalPage;
