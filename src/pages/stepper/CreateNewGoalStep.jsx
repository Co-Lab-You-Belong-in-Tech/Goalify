import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";

function CreateNewGoalStep() {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                What is your goal?
            </Typography>
            <TextField placeholder="ex: I want to learn how to ride a bike so I can commute around the city & reduce my contribution to air pollution" fullWidth  />
            <Typography variant="h6" gutterBottom>
                Why do you want to achieve this goal?
            </Typography>
            <TextField placeholder="ex: I want to learn how to ride a bike so I can commute around the city & reduce my contribution to air pollution" fullWidth />
        </div>


        )

}

export default CreateNewGoalStep;
