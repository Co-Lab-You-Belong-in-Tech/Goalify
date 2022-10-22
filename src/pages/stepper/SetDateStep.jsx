import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useState} from "react";
import Box from "@mui/material/Box";
import * as React from "react";

function SetDateStep({setGoal}) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (<Box>
        <p className={"text-2xl font-bold leading-9"}> Great, dates help keep momentum with our goals!</p>
        <div className={"flex my-3 items-center"}>
            <p className={"inline"}>
                Pick a start and end date below
            </p>
        </div>
        <div className={"flex justify-around items-center"}>
            <div className={"my-2"}>
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
            </div>
            <div className={"my-2"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="End Date"
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
            </div>
        </div>
    </Box>);

}

export default SetDateStep;
