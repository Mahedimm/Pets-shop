import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../Hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const {products} = useProducts();
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}style={{justifyContent:'flex-end'}} >
          
                {
                   
                    products.slice(0,6).map(product=> <ProductCard product={product} key={product.name}></ProductCard>)
                   
                }
                <Typography >
                    <Link to="/ourProducts" style={{color:'#82b440'}}>
                    See All
                    </Link>
                </Typography>
            </Grid>
    );
};

export default Products;