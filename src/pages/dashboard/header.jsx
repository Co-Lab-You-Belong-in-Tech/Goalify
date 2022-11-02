import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../../components/button';
import HorizontalLinearStepper from '../../components/stepper/stepper.jsx';
import Catagory from '../../components/catagory';
import { nameI, logo } from '../../assets/icons';

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

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-yellow-100 py-7 md:px-20">
      <div className="flex justify-between items-center ">
        <div>
          <Link to="/">
            <img src={nameI} />
          </Link>
        </div>
        <div className="flex gap-4 items-center my-5">
          <h1 className="text-xl font-semibold">Welcome back, Jason</h1>
          <img src={logo} alt="logo" className="w-14" />
        </div>
      </div>
      <div className="flex">
        <Catagory />
        <Button className="btn-primary w-40 ml-2 h-9" onClick={handleOpen}>
          + Create a goal
        </Button>
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
    </div>
  );
};

export default Header;
