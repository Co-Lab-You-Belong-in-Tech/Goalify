import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useState} from "react";
import Milestone from "./Milestone.jsx";
import net from "../../assets/icons/net.svg";
import * as React from "react";

function CreateNewGoal({setGoal}) {
    const [milestones, setMilestones] = useState([])
    const [milestoneInput, setMileStoneInput] = useState('')

    return <div>
        <p className={"text-xl font-bold leading-9 text-[#152e40]"}> Developing your new goal </p>
        <div className={"flex my-3 font-medium items-center"}>
            <p className={"inline"}>
                <img width={24} height={24} src={net} alt="edit" className="pr-2 inline"/>
                To develop this goal, let’s break it down into smaller goals or as we like to call them, Milestones.
            </p>
        </div>
        <p className={"text-xs font-normal leading-5 pb-8 text-[#454749]"} variant="caption" display="block" gutterBottom>
            Visualize the end result of the goal you are working on to a high standard.
            Work backwards to plan each step you need to take to increase the chances of achieving this goal.
            Have a go at setting a few milestones you think would be worth celebrating towards your goal and don’t
            worry you can always add or reduce milestones later.
        </p>
        <div
            className={" snap-mandatory  snap-y max-h-72 overflow-scroll  overscroll-contain "}
        >
            {milestones.map((m, i) => (<Milestone key={i}
                                                  milestoneContent={m.content} number={i + 1}/>))}
            {<Milestone milestoneInput={milestoneInput} setMileStoneInput={setMileStoneInput}
                        number={milestones.length + 1}/>}
        </div>
     
        <Button variant="text" size="normal" fullWidth
                sx={{
                    border: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px",
                    gap: "10px",
                    height: "36px",
                    background: "#F4F6FF",
                    borderRadius: "50px",
                 
                }}
                onClick={() => {
                    console.log(milestoneInput)
                    setMilestones([...milestones, {content: milestoneInput}]);
                    setMileStoneInput('')

                    setGoal((prev) => {
                        return {...prev, milestones: [...prev.milestones, {id:prev.milestones.length, completed: false, content: milestoneInput}]}
                    })
                }}>
            <p className={""}>+ Add milestone</p>
        </Button>
    </div>

}

export default CreateNewGoal;
