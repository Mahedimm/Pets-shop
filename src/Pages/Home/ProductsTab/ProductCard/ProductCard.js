import { CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../../Cart/Cart';
const ProductCard = ({product}) => {
  const {name, price, image, rating,_id} = product;
    return (
      <Grid item xs={12} sm={6} md={4} >
      
 
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={image}
      />
      <Box Item style={{position:'relative',textAlign:'center'}}>
      <Rating name="read-only" value={rating} readOnly   />
      <Typography variant='h5' style={{fontWeight:900,color:'red'}} >
         $ {price}
        
      </Typography>
      
      </Box>
      <Link to={`/product/${_id}`} style={{textDecoration:'none',color:'#000000'}}>
      <CardContent style={{textAlign:'center',}}>
      
        <Typography gutterBottom  component="div" >
          {name}
        </Typography>
      </CardContent>
      </Link>
      <CardActions style={{display:'flex',alignItems:'center',  justifyContent:'center',
        }} >
          <Cart product={product}/>
          {/* <Button  style={{hover:{backgroundColor:'#82b440'}}}  sx={{p:1,border: 2,borderColor: '#82b440',borderRadius: 6,color:'#000000'}}>Add to cart</Button> */}
      </CardActions>
    </Card>
    </Grid>
    );
};

export default ProductCard;