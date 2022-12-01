import {TextField} from "@mui/material";
import * as React from "react";


function AddNameStep({setUser}) {
    return (<div>
            <div className={"flex my-3 items-center"}>
                <p className={"inline"}>
                   Welcome, What is your name?
                </p>
            </div>

            <TextField placeholder="Add your name" fullWidth
                       onChange={(e) => {
                           console.log(setUser)
                           setUser((prev) => {
                               return {...prev, name: e.target.value}
                           })
                       }}
            />
        </div>


    )

}

export default AddNameStep;
