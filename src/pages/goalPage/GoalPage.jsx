import {useParams} from "react-router-dom";
import * as React from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button.jsx";
import {useSelector} from "react-redux";
import Milestone from "../../components/stepper/Milestone.jsx";

const GoalPage = () => {
    let params = useParams();
    const goals = useSelector((state) => state.goals);
    const goal = goals.find(goal => goal.id === params.goalId);
    console.log(goal)

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
                <div className="grow h-14 mx-2">
                    <p className={"text-3xl font-bold leading-9"}>
                        {goal.content}
                    </p>
                    <p className="font-semibold text-slate-600 leading-5 text-base mb-2">Your Milestones</p>
                    {goal.milestones.map((m, i) => (<Milestone key={i}
                                                          milestoneContent={m.content} number={i + 1}/>))}
                </div>
                {/*3rd col*/}
                <div className="flex-none w-1/4 h-14 bg-white mx-2">
                    03
                </div>
            </div>
        </div>
    );
}

export default GoalPage;