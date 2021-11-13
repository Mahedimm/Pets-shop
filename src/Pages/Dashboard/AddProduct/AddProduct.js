import { Alert, FormControl, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React from 'react';


const AddProduct = () => {
    const [confirm,setConfirm] = React.useState(false);
    const [product, setProduct] = React.useState({
        name: '',
        price:'',
        description:'',
        image:'',
        category:'',
        quantity:'',
        rating:''
        
      });
      const handleChange = (prop) => (event) => {
        setProduct({ ...product, [prop]: event.target.value });
        
      };

      const handleSubmit = e =>{
   
   
        //Send data to server
          fetch('https://glacial-depths-55113.herokuapp.com/products',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(product)
          })
          .then(res=>res.json())
          .then(data=>{
              // console.log(data);
              if(data.insertedId){
                  setConfirm(true);
                  setProduct({
                    name: '',
                    price:'',
                    description:'',
                    image:'',
                    category:'',
                    quantity:'',
                    rating:''
                   });
                 
              }
          })
      //   console.log(appointmentData);
    
        e.preventDefault();
    }
  

    return (
       <Container>
           <Typography variant="h4" style={{marginTop:'10px'}}sx={{ml:1}}>Add Product</Typography>
           {confirm?<Alert variant="filled" severity="success">
              Successfully Add Your Product 
                </Alert>:
           <Box>
               <from onSubmit={handleSubmit}>
                        <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Product Name" 
                                type='name' 
                                name='name'
                                onChange ={handleChange('name')}
                                variant="outlined"/>
                            </FormControl>
                        <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Product Price" 
                                type='price' 
                                name='price'
                                onChange ={handleChange('price')}
                                variant="outlined" />
                            </FormControl>
                            <FormControl sx={{m:1 ,width: '80%' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Product description"
                                name='description'
                                onChange ={handleChange('description')}
                                multiline
                                rows={6}
                                
                                />
                            </FormControl>
                            <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Image Url" 
                                type='url' 
                                name='image'
                                onChange ={handleChange('image')}
                                variant="outlined" />
                            </FormControl>
                            <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Quantity" 
                                type='number' 
                                name='quantity'
                                onChange ={handleChange('quantity')}
                                variant="outlined" />
                            </FormControl>
                           <br/>
                            <Button onClick={handleSubmit}style={{
                              backgroundColor:'#82b440',
                               color:'white' }} 
                               sx={{px:3,py:1,ml:1}} > 
                                 Add Product
                          </Button>
               </from>
           </Box>
}
       </Container>
    );
};

export default AddProduct;