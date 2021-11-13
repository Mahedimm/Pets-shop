import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PaymentModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div>
        <Button style={{
                              backgroundColor:'#82b440',
                               color:'white' }} 
                               sx={{px:3,py:1,borderRadius: 20}} variant="outlined"onClick= {handleOpen}>Make Payment</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Payment Method
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Coming Soon
            </Typography>
          </Box>
        </Modal>
      </div>
    );
};

export default PaymentModal;