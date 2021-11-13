import { Chip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import DeleTeDialog from '../Shared/DeleteDialog/DeleTeDialog';
import PaymentModal from './PaymentModal';


const UserOrder = () => {
    const [open, setOpen] = React.useState(false);
    const {user} =useAuth();
    
    const [userOrders, setUserOrders] = React.useState([]);
    useEffect(() => {
        const url =`https://glacial-depths-55113.herokuapp.com/userOrders?customerEmail=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUserOrders(data);
        })
    },[user.email]);
    // const handleDelete = (id)=>{
    //     const url = `http://localhost:5000/order/${id}`;
    //     fetch(url,{
    //         method: "DELETE"
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // console.log(data);
    //         if (data.deletedCount === 1) {
    //             alert('deleted');
    //             const remaining = userOrders.filter((order) => order._id !== id);
    //             setUserOrders(remaining);
    //         }
    //     })
    // }

    const  handleDelete = (id) =>{
        const url = `https://glacial-depths-55113.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount ===1){
               
                const remaining = userOrders.filter((order)=>order._id !== id);
                setUserOrders(remaining);
            }
        })
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          textAlign: 'center',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          textAlign: 'center',
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
         
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    return (
        <div>
            <Box container>
                <Box style={{display:'flex',justifyContent: 'space-between'}} sx={{p:2}}>
                <Typography style={{color:'#1CC7C1',fontSize:20}}>
                   Orders
                </Typography>
                <Typography style={{color:'#8B8888',fontSize:14}}>
                   Total Order:  {userOrders.length}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{backgroundColor:'#8B8888'}}>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Status </StyledTableCell>
            <StyledTableCell>Action </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrders.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">
              <Chip label={row.status} style={{color:'#82b440'}} />
              </StyledTableCell>
              <StyledTableCell align="right" style={{display:'flex',justifyContent:'center'}}>
                  <PaymentModal/>
                  <DeleTeDialog open={open} setOpen={setOpen} handleDelete={handleDelete} id={row._id}/>
               
          
              </StyledTableCell>
              
              
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
            </Box>
        </div>
    );
};

export default UserOrder;