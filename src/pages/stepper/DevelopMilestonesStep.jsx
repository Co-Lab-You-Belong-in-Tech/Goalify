import Typography from "@mui/material/Typography";
import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";

function CreateNewGoal() {
    const [milestones, setMilestones] = useState([])
    const [milestoneInput, setMileStoneInput] = useState('')
    const milestone = ({milestoneContent, number}) => <Grid xs display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                                                 sx={{
                                                     display: "flex",
                                                     flexDirection: "column",
                                                     alignItems: "flex-start",
                                                     padding: "16px",
                                                     margin: "5px",
                                                     gap: "16px",

                                                     width: "1090px",
                                                     height: "172px",
                                                     background: "#FFFFFF",
                                                     border: "1px solid rgba(65, 84, 114, 0.25)",
                                                     borderRadius: "4px",
                                                 }}
    >
        <Typography
            sx={{
                borderRadius: "50%",
                border: 'grey 1px  solid',
                padding: '5px',
            }}
            alignSelf="start" variant="caption" display="block" gutterBottom>
            {String(number).padStart(2, '0')}
        </Typography>
        <TextField id="filled-basic"
                   fullWidth
                   sx={{
                       border: '0px',
                       background: "#F5F5F5",
                   }}
                   mb={1}
                   value={milestoneContent || milestoneInput}
                   onChange={(e) => milestoneContent || setMileStoneInput(e.target.value)}/>
    </Grid>
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
                    height:100
                }}
            >
                {milestones.map((m, i) => (milestone({milestoneContent: m.content, number:i+1})))}
                {milestone({number: milestones.length+1})}
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
                        setMilestones([...milestones, {content: milestoneInput}]); setMileStoneInput('')
                    }}>
                + Add milestone
            </Button>
        </box>

}

export default CreateNewGoal;
