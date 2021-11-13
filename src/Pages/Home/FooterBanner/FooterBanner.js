import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import banner from '../../../images/460x500.jpg';
import banner2 from '../../../images/footerBanner-sm-1.jpg';
import banner3 from '../../../images/footerBanner-sm-2.jpg';
const FooterBanner = () => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <img src={banner} alt="" srcset="" />
                </Grid>
                <Grid item xs={12} sm={8}style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}} >
                 
                        <img src={banner2} style={{width:600}} alt="" srcset="" />
                        <img src={banner3} style={{width:600}} alt="" srcset="" />
                        
                      
                </Grid>
            </Grid>
        </Container>
    );
};

export default FooterBanner;