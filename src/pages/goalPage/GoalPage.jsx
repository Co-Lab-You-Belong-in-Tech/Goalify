import {useParams} from "react-router-dom";
import * as React from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button.jsx";
import {useSelector} from "react-redux";
import inProgress from "../../assets/icons/inProgress.svg";
import progress from "../../assets/icons/progress.svg";
import dots from "../../assets/icons/dots.svg";
import uploadImg from "../../assets/icons/uploadImg.svg";
import selectEmoji from "../../assets/icons/selectEmoji.svg";
import save from "../../assets/icons/save.svg";



const GoalPage = () => {
    let params = useParams();
    const goals = useSelector((state) => state.goals);

    const goal = goals.find(goal => goal.id == params.goalId);

    const reflection =
        <div className={""}>
            <div className={"pl-4 pb-4 mb-5 flex bg-white"}>
                <div className={"w-9 h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4"}><img src={uploadImg}/></div>
                <div className={"w-9 h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4"}><img src={selectEmoji}/></div>
            </div>
            <div className={"pl-4"}>
                <div className={" bg-gray-100 w-full pr-4 mb-3"}>
                    <p> Reflection </p>
                    <input className={"my-2 bg-gray-100 border border-gray-300 w-full p-2 rounded-l"}/>
                </div>
                <button className={" bg-gray-200 flex p-2 rounded-xl"}>
                    <img className={"mr-4"} src={save}/>
                    <p> Save reflection</p>
                </button>
            </div>
        </div>

    return (<div className={"bg-gray-100"}>
        <div className="bg-yellow-100 h-56 py-3 md:py-5 md:px-20">
            <div className="flex gap-4 items-center my-5">
                <img src={Logo} alt="logo"/>
                <h1 className="text-4xl font-semibold">Welcome back, Jason</h1>
            </div>
            <div>
                <Button className="btn-primary w-44 ml-2">+ Create a goal</Button>
            </div>
        </div>
        <div className="h-screen flex px-5  mt-4">
            {/*1st col*/}
            <div className="h-fit flex-none w-1/4 h-14  mx-2">
                <div className={"mb-3 p-3  bg-white"}>
                    <p className="font-semibold text-slate-600 leading-5 text-base mb-2">Your Motivation</p>
                    <blockquote contentEditable="true" className={"bg-slate-100 p-3"}>
                        {goal.motivation}
                    </blockquote>
                </div>
                <div className={"p-3  bg-white"}>
                    <p className="font-semibold text-slate-600 leading-5 text-base mb-2">Actively Overview</p>
                    <blockquote contentEditable="true" className={"bg-slate-100 p-3"}>
                        {goal.motivation}
                    </blockquote>
                </div>
            </div>
            {/*2nd col*/}
            <div className="grow h-14 mx-2 ">
                <p className={"text-3xl font-bold leading-9 mb-8"}>
                    {goal.content}
                </p>
                <p className="font-semibold text-slate-600 leading-5 text-base mb-5">Your Milestones</p>
                {goal.milestones.map((m, i) => {
                    const background = m.completed ? " bg-yellow-50" : "bg-indigo-50 "
                    return (
                        <div className={`border border-gray-200 rounded-xl bg-gray-100  mb-3 ${m.completed?"pb-4":""}`} key={i}>
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
                                    <img className={"justify-end"} src={dots}/>
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
                                {m.completed ? reflection : <></>
                                }
                            </div>

                        </div>)
                })}
            </div>
            {/*3rd col*/}
            <div className="flex-none w-1/4 h-14 bg-white mx-2">
                03
            </div>
        </div>
    </div>);
}

export default GoalPage;