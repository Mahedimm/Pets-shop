import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const{admin,user} = useAuth()
    return (
        <div>
            <Typography variant='h1'>
                {admin? `Welcome Admin DashBoard -${user.displayName}`: `Welcome User DashBoard-${user.displayName}`}
            </Typography>
        </div>
    );
};

export default DashboardHome;