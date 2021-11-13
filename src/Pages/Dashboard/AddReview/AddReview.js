import { Alert, Divider, FormControl, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const AddReview = () => {
    const {user} = useAuth();
    const [confirm,setConfirm] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const [review, setReview] = React.useState({
       
        description:'',
        
        
      });
      const handleChange = (prop) => (event) => {
        setReview({ ...review, [prop]: event.target.value });
        
      };
    

      const handleSubmit = e =>{
   
        const reviewData ={
            ...review,
            name:user.displayName,
            image:user.photoURL,
            rating:rating,
        }
        //Send data to server
          fetch('https://glacial-depths-55113.herokuapp.com/reviews',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(reviewData)
          })
          .then(res=>res.json())
          .then(data=>{
              // console.log(data);
              if(data.insertedId){
                  setConfirm(true);
                  setReview({
                   description:''
                   });
                   setRating(0);
                 
              }
          })
      //   console.log(appointmentData);
    
        e.preventDefault();
    }
    return (
        <Container>
           <Typography variant="h4" style={{marginTop:'10px'}}sx={{}}>Give Your Review</Typography>
           <Divider/>
           <Box sx={{mt:2}}>
                            <Typography component="legend">Given Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                rating={rating}
                                onChange={(event, newRating) => {
                                setRating(newRating);
                                }}
                            />
                            </Box>
           {confirm?<Alert variant="filled" severity="success">
              Successfully Add Your Review 
                </Alert>:
           <Box>
      
               <from onSubmit={handleSubmit}>
                       
                            <FormControl sx={{ width: '80%' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Review"
                                name='description'
                                onChange ={handleChange('description')}
                                multiline
                                rows={6}
                                
                                />
                            </FormControl>
                          
                                            
                           <br/>
                            <Button onClick={handleSubmit}style={{
                              backgroundColor:'#82b440',
                               color:'white' }} 
                               sx={{px:3,py:1,mt:2}} > 
                                 Review
                          </Button>
               </from>
           </Box>
}
       </Container>
    );
};

export default AddReview;