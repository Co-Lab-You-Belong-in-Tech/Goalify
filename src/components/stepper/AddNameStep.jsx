import {TextField} from "@mui/material";
import * as React from "react";


function AddNameStep({setUser}) {
    return (<div>
            <div className={"flex my-9 items-center"}>
                <p className={"font-bold text-xl text-[#152e40]"}>
                   Welcome 😃, what's your name?
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
