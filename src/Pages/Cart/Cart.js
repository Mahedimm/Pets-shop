import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import CartCard from './CartCard';
const Cart = ({product}) => {
    const {cartProduct,setCartProduct} = useProducts();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
     
      const toggleDrawer = (anchor, open) => (event) => {
        setCartProduct([...cartProduct,product]);
        
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
   
                 {
                        cartProduct.map((item,index)=><CartCard item={item} key={index}/>
                        )
                    }
             
         
          </List>
          <Divider />
          <Link to="/confirmOrder">
          <Button style={{color:'black',}} sx={{border: 3,borderRadius: 16,borderColor:'#82b440',backgroundColor:'#82b440',mt:2,px:2,ml:5}}>Confirm Order</Button>
          </Link>
        </Box>
      );
    return (
        <div>
      {['right', ].map((anchor) => (
        <React.Fragment key={anchor}>
             {/* <Button variant="" >Add to cart</Button> */}
             
          <Button style={{hover:{backgroundColor:'#82b440',color:'#82b440'}}} sx={{border: 3,borderRadius: 16,borderColor:'#82b440',mt:2,px:2,}} onClick={toggleDrawer(anchor, true)}>Add to Cart</Button>
       
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    );
};

export default Cart;