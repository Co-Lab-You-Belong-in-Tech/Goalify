import Button from '../../components/button';
import Logo from '../../assets/icons/logo.png';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import HorizontalLinearStepper from '../../components/stepper/stepper.jsx';

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
    <div className="bg-yellow-200 h-56 py-3 md:py-5 md:px-20">
      <div className="flex gap-4 items-center my-5">
        <img src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold">Welcome back, Jason</h1>
      </div>
      <div>
        <Button className="btn-primary w-44 ml-2" onClick={handleOpen}>
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
