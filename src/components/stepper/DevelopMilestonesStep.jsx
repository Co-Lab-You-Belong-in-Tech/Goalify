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
        <p className={"text-2xl font-bold leading-9"}> Developing your new goal </p>
        <div className={"flex my-3 items-center"}>
            <p className={"inline"}>
                <img width={30} height={30} src={net} alt="edit" className="pr-2 inline"/>
                To develop this goal, let’s break it down into smaller goals or as we like to call them, Milestones.
            </p>
        </div>

        <Typography variant="caption" display="block" gutterBottom>
            Visualize the end result of the goal you are working on to a high standard.
            Work backwards to plan each step you need to take to increase the chances of achieving this goal.
            Have a go at setting a few milestones you think would be worth celebrating towards your goal and don’t
            worry you can always add or reduce milestones later.
        </Typography>
        <div
            className={"snap-mandatory snap-y max-h-96 overflow-scroll  overscroll-contain "}
        >
            {milestones.map((m, i) => (<Milestone key={i}
                                                  milestoneContent={m.content} number={i + 1}/>))}
            {<Milestone milestoneInput={milestoneInput} setMileStoneInput={setMileStoneInput}
                        number={milestones.length + 1}/>}
        </div>
        <Button variant="text" size="large" fullWidth
                sx={{
                    border: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px",
                    gap: "10px",
                    height: "56px",
                    background: "#F4F6FF",
                    borderRadius: "50px",
                }}
                onClick={() => {
                    console.log(milestoneInput)
                    setMilestones([...milestones, {content: milestoneInput}]);
                    setMileStoneInput('')

                    setGoal((prev) => {
                        return {...prev, milestones: [...prev.milestones, {id:Math.random()*100, completed: false, content: milestoneInput}]}
                    })
                }}>
            <p className={"font-black"}>+ Add milestone</p>
        </Button>
    </div>

}

export default CreateNewGoal;
