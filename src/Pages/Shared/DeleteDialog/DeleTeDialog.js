
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';

const DeleTeDialog = ({setOpen,open,handleDelete,id}) => {
    

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
    return (
        <div>
      <Button style={{
                              backgroundColor:'red',
                               color:'white' }} 
                               sx={{px:3,py:1,borderRadius: 20}} variant="outlined" onClick={handleClickOpen} >
        Cancel
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{" ORDER CANCEL?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Alert variant="filled" severity="error">
            Are you sure you want to cancel this order!
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={()=>{handleDelete(id); handleClose()}}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
};

export default DeleTeDialog;