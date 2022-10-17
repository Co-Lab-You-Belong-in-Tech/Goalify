import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useState} from "react";
import Milestone from "./Milestone.jsx";

function CreateNewGoal({setGoal}) {
    const [milestones, setMilestones] = useState([])
    const [milestoneInput, setMileStoneInput] = useState('')

    return <box>
        <Typography variant="h6" gutterBottom>
            Developing your new goal
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            To develop this goal, let’s break it down into smaller goals or as we like to call them, Milestones.
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            Visualize the end result of the goal you are working on to a high standard.
            Work backwards to plan each step you need to take to increase the chances of achieving this goal.
            Have a go at setting a few milestones you think would be worth celebrating towards your goal and don’t
            worry you can always add or reduce milestones later.
        </Typography>
        <grid
            sx={{
                height: 100
            }}
        >
            {milestones.map((m, i) => (<Milestone key={i}
                milestoneContent={m.content} number={i + 1}/>))}
            {<Milestone milestoneInput={milestoneInput} setMileStoneInput={setMileStoneInput}
                        number={milestones.length + 1}/>}
        </grid>
        <Button variant="outlined" size="large" fullWidth
                sx={{
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
                        return {...prev, milestones:[...milestones, {content: milestoneInput}]}
                    })
                }}>
            + Add milestone
        </Button>
    </box>

}

export default CreateNewGoal;
