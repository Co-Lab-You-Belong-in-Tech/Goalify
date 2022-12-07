import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useState} from "react";
import Box from "@mui/material/Box";
import * as React from "react";



function SetDateStep({setGoal}) {
    const getDateText = (dateObj) => {
       return dateObj.toString().split(' ').slice(0,4).join(' ')
    }
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (<Box>
        <p className={"text-xl font-bold leading-9 text-[#152e40]"}> Adding dates to your goal</p>
        <div className={"flex my-3 items-center"}>
            <p className={"inline font-medium text-sm"}>
                If your goal is time bound, pick a start and end date below. If not, you can skip this part by pressing the "skip" button below.
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
                                return {...prev, startDate: getDateText(newValue)}
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
                                return {...prev, endDate: getDateText(newValue)}
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
