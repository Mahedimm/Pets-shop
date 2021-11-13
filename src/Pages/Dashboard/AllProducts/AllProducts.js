import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import DeleTeDialog from '../../Shared/DeleteDialog/DeleTeDialog';
const AllProducts = () => {

    const [open, setOpen] = React.useState(false);
    const [allOrders, setAllOrders] = React.useState([]);
    const {products} = useProducts();
    // useEffect(() => {

    //     fetch("https://glacial-depths-55113.herokuapp.com/orders/")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllOrders(data);
    //     })
    // },[]);
    
     const handleDelete = (id)=>{
        const url = `https://glacial-depths-55113.herokuapp.com/orders/${id}`;
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
               Products
            </Typography>
            <Typography style={{color:'#8B8888',fontSize:14}}>
               Total Products:  {products.length}
            </Typography>
        </Box>
        <TableContainer component={Paper}>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead style={{backgroundColor:'#8B8888'}}>
      <TableRow>
        <StyledTableCell>Id</StyledTableCell>
        <StyledTableCell>Name </StyledTableCell>
        <StyledTableCell>Action </StyledTableCell>
        <StyledTableCell>Stock</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {products.map((row) => (
        <StyledTableRow >
          <StyledTableCell component="th" scope="row">
            {row._id}
          </StyledTableCell>
          <StyledTableCell align="right">
              {row.customerName}
          </StyledTableCell>
          <StyledTableCell align="right" style={{display:'flex',justifyContent:'center'}}>
              <DeleTeDialog handleDelete={handleDelete} id={row._id}setOpen={setOpen}open={open}>
                  Are you sure you want to delete this product?
              </DeleTeDialog>
         
          </StyledTableCell>
          <StyledTableCell>
               {row.quantity || row.stock}
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

export default AllProducts;