import { Divider, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../Home/ProductsTab/ProductCard/ProductCard';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
const OurProducts = () => {
    const {products} = useProducts();
    return (
        <Box>
        <Navigation/>
        <Container sx={{mt:5}}>
            <Typography variant='h6'  sx={{fontWeight: 'bold',py:2}}>
                     Our Products
                 </Typography>
                 <Divider/>
                 <Typography sx={{mb:2}}>
                 Discover our favorites unique discoveries, a selection of cool items to integrate for your pets..
                 </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }}style={{justifyContent:'flex-end'}} sx={{mt:10}} >
                 
          
          {
             
              products.map(product=> <ProductCard product={product} key={product.name}></ProductCard>)
             
          }
      </Grid>
      </Container>
      <Footer/>
      </Box>
    );
};

export default OurProducts;