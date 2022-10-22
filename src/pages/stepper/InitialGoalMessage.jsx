import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HorizontalLinearStepper from "./stepper.jsx";
import {Grid} from "@mui/material";
import emoji from "../../assets/icons/emoji.svg";

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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" sx={{background:"#FFFFF9"}}>
        <p className="text-4xl leading-10 font-bold mb-10"> Welcome, Jason</p>

        <div className="border divide-neutral-300 border-solid p-5 bg-white	">
            <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">

                <p className="text-2xl font-bold leading-9 ">
                    Looks like you don’t have any goals just yet....let’s get that sorted
                </p>
                <Button sx={{background: "#F4F6FF", marginY: "15px"}} onClick={handleOpen}>+ Create A Goal</Button>
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
                <HorizontalLinearStepper />
            </Box>
        </Modal>
    </Grid>);
}