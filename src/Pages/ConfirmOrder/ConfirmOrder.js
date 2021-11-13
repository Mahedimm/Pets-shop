import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';



const ConfirmOrder = () => {
    const {user} = useAuth();
    const [confirm,setConfirm] = React.useState(false);
    const {cartProduct,setCartProduct} = useProducts();
    
    const orderInfo = {customerName:user.displayName,customerEmail:user.email,productId:cartProduct.map(item=>item.id)};
  
    const [order,setOrder] = React.useState(orderInfo);
    
    const handleChange = (prop) => (event) => {
      setOrder({ ...order, [prop]: event.target.value });
      console.log(order);
    };
    const handleSubmit = e =>{
        console.log(order);
        //Collect data
        const orderData = {
            ...order,status:'pending'
        }
        //Send data to server
          fetch('https://glacial-depths-55113.herokuapp.com/orders',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(orderData)
          })
          .then(res=>res.json())
          .then(data=>{
              // console.log(data);
              if(data.insertedId){
                  setConfirm(true);
                 
              }
          })
          setOrder(orderInfo);
          setCartProduct([]);
      //   console.log(appointmentData);
       
        e.preventDefault();
    }
  
    return (
        <Box>
      
          <Navigation />
          {confirm ? <h1 style={{textAlign:'center',marginTop:'50px'}} >Thank you for your order</h1> :
          <Container sx={{mt:5}}>
             <form onSubmit={handleSubmit}
                style={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'80%'
                }}>

                        
                        <TextField
                        sx={{width:'100%',my:1}}
                        label="YOUR NAME" id="YOUR NAME"
                        name="Name"
                        onChange ={handleChange('Name')}
                        defaultValue={user.displayName}
                     
                        />
                        
                        <TextField
                        sx={{width:'100%',my:1}}
                        name="Phone"
                        onChange ={handleChange('Phone')}
                        label="PHONE NUMBER" id="PHONE NUMBER"
                        // defaultValue='PHONE NUMBER'
                   
                        />
                        <TextField
                        sx={{width:'100%',my:1}}
                        name="address"
                        onChange ={handleChange('address')}
                        label="Your Address" id="Address"
                        // defaultValue='PHONE NUMBER'
                   
                        />
                        <TextField
                        sx={{width:'100%',my:1}}
                        // id="outlined-size-small"
                        name="Email"
                        onChange ={handleChange('Email')}
                        label="EMAIL" id="EMAIL"
                        defaultValue={user.email}
                        
                        />
                    
                          <Button onClick={handleSubmit}style={{
                              backgroundColor:'#82b440',
                               color:'white' }} 
                               sx={{px:3,py:1}} > 
                                 CONFIRM ORDER
                          </Button>
                         
                      
                    </form>
      </Container>
}
            <Box style={{bottom:'0',position:'absolute',width:'100%'}}>
            <Footer/>
            </Box>
   
      </Box>
    );
};

export default ConfirmOrder;