import {TextField} from "@mui/material";
import * as React from "react";


function AddNameStep({setUser}) {
    return (<div>
            <div className={"flex my-5 items-center"}>
                <p className={"font-bold text-xl text-[#152e40] font-poppins"}>
                   Welcome, what is your name?
                </p>
            </div>

            <TextField placeholder="Add your name" fullWidth
                       onChange={(e) => {
                           setUser((prev) => {
                               return {...prev, name: e.target.value}
                           })
                       }}
            />
        </div>


    )

}

export default AddNameStep;
