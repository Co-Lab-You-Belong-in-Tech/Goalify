import {Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const Milestone = ({milestoneInput, setMileStoneInput, milestoneContent, number}) =>
{
    return <Grid xs display="flex" flexDirection="column"
          justifyContent="center" alignItems="center"
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
                borderRadius: "50%", border: 'grey 1px  solid', padding: '5px',
            }}
            alignSelf="start" variant="caption" display="block" gutterBottom>
            {String(number).padStart(2, '0')}
        </Typography>
        <TextField id="filled-basic"
                   fullWidth
                   sx={{
                       border: '0px', background: "#F5F5F5",
                   }}
                   mb={1}
                   value={milestoneContent || milestoneInput}
                   onChange={(e) => milestoneContent || setMileStoneInput(e.target.value)}/>
    </Grid>
}
export default Milestone