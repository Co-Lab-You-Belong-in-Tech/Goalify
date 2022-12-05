import {TextField} from "@mui/material";
import progress from "../../assets/icons/progress.svg";
import * as React from "react";


function CreateNewGoalStep({setGoal}) {

    return (<div>
            <p className={"text-xl font-bold leading-9 text-[#152e40]"}> Creating your new goal </p>
            <div className={"flex my-3 items-center"}>
                <p className={"inline"}>
                    <img width={30} height={30} src={progress} alt="edit" className="pr-2 inline"/>
                    What is your goal?
                </p>
            </div>

            <TextField placeholder="ex: I want to learn how to ride a bike" fullWidth
                       onChange={(e) => {
                           setGoal((prev) => {
                               return {...prev, content: e.target.value}
                           })
                       }}
            />
            <div className={"flex my-3 items-center"}>
                <p className={"inline"}>
                    <img width={30} height={30} src={progress} alt="edit" className="pr-2 inline"/>
                    Why do you want to achieve this goal?
                </p>
            </div>
            <TextField placeholder="so I can commute around the city & reduce my contribution to air pollution"
                       onChange={(e) => {
                           setGoal((prev) => {
                               return {...prev, motivation: e.target.value}
                           })
                       }}
                       fullWidth/>
        </div>


    )

}

export default CreateNewGoalStep;
