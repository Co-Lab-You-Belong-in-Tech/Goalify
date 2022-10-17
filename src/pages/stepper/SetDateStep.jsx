import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Typography from "@mui/material/Typography";
import {useState} from "react";
import Box from "@mui/material/Box";

function SetDateStep({setGoal}) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (<Box>
        <Typography variant="h6" gutterBottom>
            Great, dates help keep momentum with our goals!
            Pick a start and end date below
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => {
                    setStartDate(newValue);
                    setGoal((prev) => {
                        return {...prev, startDate: newValue}
                    })
                    console.log(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Start Date"
                value={endDate}
                onChange={(newValue) => {
                    setEndDate(newValue);
                    setGoal((prev) => {
                        return {...prev, endDate: newValue}
                    })
                    console.log(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    </Box>);

}

export default SetDateStep;
