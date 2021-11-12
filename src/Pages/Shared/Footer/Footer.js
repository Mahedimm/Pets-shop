
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const Footer = () => {
    return (
        <Box sx={{p:10,mt:5,textAlign:'center'}}style={{color:'white', backgroundColor:'#545454'}} >
        <Typography>
            About Us | Terms of Service | Privacy Policy | Contact Us
        </Typography>
        <Typography>
        © 2021 - mahediHasan™
        </Typography>


        </Box>
    );
};

export default Footer;