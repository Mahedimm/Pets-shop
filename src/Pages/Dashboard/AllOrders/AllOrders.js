import { MenuItem, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
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
import DeleTeDialog from '../../Shared/DeleteDialog/DeleTeDialog';
const allStatus = [
    {
      value: 'pending',
      label: 'Pending',
    },
    {
      value: 'confirm',
      label: 'Confirm',
    },
    {
      value: 'shipping',
      label: 'Shipping',
    },
    {
      value: 'delivered',
      label: 'Delivered',
    },
  ];

const AllOrders = () => {
    const [open, setOpen] = React.useState(false);
    const [allOrders, setAllOrders] = React.useState([]);
    const [status, setStatus] = React.useState('pending');
    useEffect(() => {

        fetch("http://localhost:5000/orders/")
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
        })
    },[]);
    
     const handleDelete = (id)=>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if (data.deletedCount === 1) {
          
                const remaining = allOrders.filter((order) => order._id !== id);
                setAllOrders(remaining);
            }
        })
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setStatus(event.target.value);
      };
    const handleUpdate = (id) =>{
        // const admin = {email:values.adminEmail} ;
        const newStatus ={status:status};
      console.log(newStatus);
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PUT',
            headers: {
              
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                
               
            }
        })}
    
 

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
               Total Order:  {allOrders.length}
            </Typography>
        </Box>
        <TableContainer component={Paper}>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead style={{backgroundColor:'#8B8888'}}>
      <TableRow>
        <StyledTableCell>Id</StyledTableCell>
        <StyledTableCell>Name </StyledTableCell>
        <StyledTableCell>Action </StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {allOrders.map((row) => (
        <StyledTableRow >
          <StyledTableCell component="th" scope="row">
            {row._id}
          </StyledTableCell>
          <StyledTableCell align="right">
              {row.customerName}
          </StyledTableCell>
          <StyledTableCell align="right" style={{display:'flex',justifyContent:'center'}}>
              <DeleTeDialog handleDelete={handleDelete} id={row._id}setOpen={setOpen}open={open}/>
             
             <Box>
             <Button style={{
                              backgroundColor:'#82b440',
                               color:'white' }} 
                               sx={{px:3,py:1,borderRadius: 20}} variant="outlined" onClick={handleUpdate(row._id)} >
                                 Update Status
                            </Button>
                    </Box>
                    <TextField 
                   
                    id="status"
                    select
                    label="Order Status"
                    value={status}
                    onChange={handleChange}
                  
                    >
                    {allStatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
             </TextField> 
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

export default AllOrders;