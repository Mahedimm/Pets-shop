import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth();
    if(isLoading) { return <CircularProgress />}
    return (
        <Route {...rest}
        render={({location}) =>user.email?children : <Redirect
            to={{
                pathname: '/signIn',
                state:{from: location}
            }}
        /> }>
            
        </Route>
    );
};

export default PrivateRoute;