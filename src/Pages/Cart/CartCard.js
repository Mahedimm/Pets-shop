import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const CartCard = ({item}) => {
    const {name,price,image,} =item;

 
    return (
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
             {name}
            </Typography>
            <Typography variant="subtitle1" color="red" component="div">
              $ {price}
            </Typography>
            <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={image}
          alt="Live from space album cover"
        />
          </CardContent>
         
        </Box>
      
      </Card>
    );
};

export default CartCard;