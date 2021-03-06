import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
const Reviews = () => {
    const [reviews, setReviews] = React.useState([]);
   useEffect(() => {
       fetch('https://glacial-depths-55113.herokuapp.com/reviews')
       .then(res=>res.json())
       .then(data=>setReviews(data.slice(0,3)))
   },[]);
    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{textAlign:'center',}}sx={{ fontWeight: 'bold' ,mt:5,mb:2}}>
            What Our Customer Say!
            </Typography>
            <Grid container spacing={2} style={{justifyContent:'center'}}>

                {
                    reviews.map(review=>(<ReviewCard review={review} key={review._id}/>))
                }

            </Grid>
        </Container>
    );
};

export default Reviews;