import Typography from "@mui/material/Typography";
import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";

function CreateNewGoal() {
    const [milestones, setMilestones] = useState([])
    const [milestoneInput, setMileStoneInput] = useState('')
    const milestone = (milestoneConent) => <Grid xs display="flex" justifyContent="center" alignItems="center"
                                                 sx={{
                                                     height: 100, border: '#f5f5f5 1px  solid', '&:hover': {
                                                         opacity: [0.9, 0.8, 0.7],
                                                     },
                                                 }}
    >
        <TextField id="filled-basic"
                   fullWidth
                   sx={{
                       border: 'none'
                   }}
                   mb={1}
                   value={milestoneConent || milestoneInput}
                   onChange={(e) => setMileStoneInput(e.target.value)}/>
    </Grid>
    return (<box>
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
                {milestones.map((m => (milestone(m.content))))}
                {milestone()}
            </grid>
            <Button variant="outlined" size="large" fullWidth
                    onClick={() => {
                        setMilestones([...milestones, {content: milestoneInput}]); setMileStoneInput('')
                    }}>
                + Add milestone
            </Button>
        </box>

    )

}

export default CreateNewGoal;
