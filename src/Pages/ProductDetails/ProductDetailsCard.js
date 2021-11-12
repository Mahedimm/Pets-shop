import { Container, Divider, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Cart from '../Cart/Cart';
const ProductDetailsCard = ({product}) => {
    const {name,price,image,description,rating,stock} = product;
    return (
        <Container>
            <Grid container spacing={4} style={{
alignItems: 'center'}}>
                <Grid item xs={12} md={4}>
                <Box elevation={0} >
                    <img src={image} alt="" srcset="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} style={{textAlign:'left'}}>
                   <Box elevation={0}style={{display:'flex',flexDirection: 'column'}} sx={{ml:5,}}>
                    <Typography style={{fontSize:'32px',color:'#000000'}} >{name}</Typography>
                    <Rating name="read-only" value={rating} readOnly />

                    <Typography style={{fontSize:'32px',color:'red'}} sx={{fontWeight:'bold'}}>$ {price}</Typography>
                    
                    <Typography style={{fontSize:'16px',fontWeight:'300px',color:'#545454'}}  sx={{my:2}} >{description}</Typography>
                    <Typography style={{fontSize:'12px',color:'#000000'}}  sx={{my:2,fontWeight:'bold'}} >{stock} IN STOCK</Typography>
                    
                    <Divider />
                    <Box>
                    <Cart product={product}/>
                    </Box>
                   
                    </Box>
                    
                </Grid>
                </Grid>
        </Container>
    );
};

export default ProductDetailsCard;