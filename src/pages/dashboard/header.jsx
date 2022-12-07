import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../../components/button';
import HorizontalLinearStepper from '../../components/stepper/stepper.jsx';
import Category from '../../components/category';
import { Glogo, logo } from '../../assets/icons';
import {useSelector} from "react-redux";


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
  const name = useSelector( (state) => state.user.name)
  return (
    <div className="h-50 bg-r bg-orange-50 fixed top-0 left-0 w-full py-5 px-10">
      <div className="flex justify-between items-center ">
        <div>
          <Link to="/">
            <img src={Glogo} />
          </Link>
        </div>
        <div className="flex gap-4 items-center my-5">
          <h1 className="text-xl font-semibold text-[#152E40] ">Welcome back, {name}</h1>
          <img src={logo} alt="logo" className="w-14" />
        </div>
      </div>
      <div className="flex">
        <Category />
        <Button className="btn-primary w-40 ml-2 h-9  text-sm font-bold" onClick={handleOpen}>
          +    Create a goal
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
