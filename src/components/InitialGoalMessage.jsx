import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HorizontalLinearStepper from "./stepper.jsx";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid grey',
    boxShadow: 1,
    p: 4,
};

export default function InitialGoalMessage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid xs display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom>
                Looks like you don’t have any goals just yet....let’s get that sorted
            </Typography>
            <Button onClick={handleOpen}>+ Create A Goal</Button>
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
        </Grid>
    );
}