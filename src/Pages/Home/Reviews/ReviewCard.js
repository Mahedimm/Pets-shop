import { Avatar, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewCard = ({review}) => {
    const {name,image,rating,description} = review;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={3} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}sx={{p:5}}>
             <Avatar
                alt={name}
                src={image}
                sx={{ width: 56, height: 56 }}
                />
                <Typography style={{color:'#000000'}}>
                    
                    {name}
                </Typography>
                <Rating name="rating" value={rating} readOnly />
                <Typography style={{color:'#82b440',}}sx={{fontStyle: 'italic',mt:2}}>
                   " {description} "
                </Typography>

            </Paper>
            
        </Grid>
    );
};

export default ReviewCard;