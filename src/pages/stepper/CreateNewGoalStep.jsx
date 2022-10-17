import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";

function CreateNewGoalStep({setGoal}) {

    return (<div>
            <Typography variant="h6" gutterBottom>
                What is your goal?
            </Typography>
            <TextField placeholder="ex: I want to learn how to ride a bike" fullWidth
                       onChange={(e) => {
                           setGoal((prev) => {
                               return {...prev, goal: e.target.value}
                           })
                       }}
            />
            <Typography variant="h6" gutterBottom>
                Why do you want to achieve this goal?
            </Typography>
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
