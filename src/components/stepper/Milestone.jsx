import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const Milestone = ({milestoneInput, setMileStoneInput, milestoneContent, number}) => {
    return <div className={"snap-end my-2"}>
        <div className={"p-4"}
                 style={{
                     width: "100%",
                     border: "1px solid rgba(65, 84, 114, 0.25)",
                     borderRadius: "4px",
                 }}
    >
        <Typography
            sx={{
                borderRadius: "50%",
                border: 'grey 1px  solid',
                padding: '16px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "48px",
                height: "48px",
            }}
            gutterBottom>
            <p className="font-black text-xl"> {String(number).padStart(2, '0')} </p>
        </Typography>
        <TextField id="filled-basic"
                   fullWidth
                   sx={{
                       border: '0px', background: "#F5F5F5",
                   }}
                   mb={1}
                   value={milestoneContent || milestoneInput}
                   placeholder={"Ex: The first milestone towards my goal of getting all A’s this semester is creating a schedule so I can manage my time better."}
                   onChange={(e) => milestoneContent || setMileStoneInput(e.target.value)}/>
    </div>
    </div>
}
export default Milestone