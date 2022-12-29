import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useState} from "react";
import Milestone from "./Milestone.jsx";
import net from "../../assets/icons/net.svg";
import * as React from "react";
import { Alert } from '@mui/material';




function CreateNewGoal({setGoal}) {
    const [milestones, setMilestones] = useState([])
    const [milestoneInput, setMileStoneInput] = useState('')

    function setLocalMilestoneState(index, value) {
        // this is for the local milestones so it's kept up to date. Note these don't have IDs
        const localMilestonesCopy = [...milestones];
        const localMilestoneToEdit = localMilestonesCopy[index];
        localMilestoneToEdit.content = value;
        localMilestonesCopy[index] = localMilestoneToEdit;

        setMilestones([...localMilestonesCopy]);
    }

    const updateMilestone = (index, value) => {
        setLocalMilestoneState(index, value);

        setGoal((prevGoalState) => {
            // these are the milestones stored on the goal with the milestone ID
            const milestonesCopy = [...prevGoalState.milestones];
            const milestoneToEditWithinGoal = milestonesCopy[index];

            if (milestoneToEditWithinGoal) {
                milestoneToEditWithinGoal.content = value;
                milestonesCopy[index] = milestoneToEditWithinGoal;
            }

            
            return {...prevGoalState, milestones: [...milestonesCopy]}
        })
    }

    return <div>
        <p className={"text-xl font-bold leading-9 text-[#152e40]"}> Developing your new goal </p>
        <div className={"flex my-3 font-Normal items-center"}>
            <p className={"inline text-lg"}>
                <img width={24} height={24} src={net} alt="edit" className="pr-2 inline"/>
                To develop this goal, let’s break it down into smaller goals or as we call them, milestones.
            </p>
        </div>
        <p className={"text-sm font-normal leading-5 pb-5 text-[#454749]"} variant="caption" display="block" gutterBottom>
            Visualize the end result of the goal you are working on to a high standard.
            Work backwards to plan each step you need to take to increase the chances of achieving this goal.
            Have a go at setting a few milestones you think would be worth celebrating towards your goal and don’t
            worry you can always add or reduce milestones later.</p>
        

    <Alert variant="outlined" severity="info"> 
    We are aware of an issue that causes the last milestone created to be deleted. To <b>avoid</b> this issue, we recommend adding an "empty" milestone as the last one to save all milestones. We are working on resolving this issue and appreciate your patience :D
        </Alert>

        <div
            className={" snap-mandatory  snap-y max-h-72 overflow-scroll  overscroll-contain "}
        >
            {milestones.map((m, i) => (<Milestone key={i}
                                                  milestoneContent={m.content} number={i + 1}
                                                  updateMileStoneInput={(value) => {
                                                    updateMilestone(i, value)
                                                  }}
                                                  />))}
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
