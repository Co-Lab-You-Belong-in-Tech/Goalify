import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HorizontalLinearStepper from "./stepper.jsx";
import {Grid} from "@mui/material";
import emoji from "../../assets/icons/emoji.svg";
import {useDispatch, useSelector} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    backgroundColor: 'background.paper',
    border: '2px solid grey',
    boxShadow: 1,
    p: 4,
};

export default function InitialGoalMessage() {
    const [open, setOpen] = React.useState(false);
    const name  = useSelector((state) => state.user.name);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    return (<Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" height={`${100-50}vh`}>
        <p className="text-4xl leading-10 font-bold text-[#152E40] mb-10"> Welcome, {name}</p>

        <div className="border divide-neutral-300 rounded-lg border-indigo-50  p-5 bg-white	">
            <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <p className="text-xl font-medium leading-9 ">
                    Looks like you don’t have any goals just yet....let’s get that sorted
                </p>
                <Button sx={{background: "#F4F6FF", marginY: "30px"}} onClick={handleOpen}>+ Create A Goal</Button>
                <img width={100} height={100} src={emoji} alt="edit" className="pr-2"/>
            </Grid>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <HorizontalLinearStepper handleClose={handleClose} />
            </Box>
        </Modal>
    </Grid>);
}