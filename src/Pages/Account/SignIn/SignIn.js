import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import signInbanner from '../../../images/signInbanner.png';

const SignIn = () => {
    const {loginUser,isLoading,authError,signInWithGoogle}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleSignIn = (e)=>{

        loginUser(values.email,values.password,history,location);
        setValues({
            password: '',
            email:'',
        });
            e.preventDefault();
           
      }
      const handleGoogleSignIn = ()=>{
        signInWithGoogle(history,location);
      }


    return (
         <Container sx={{borderLeft: 3,borderColor:'#82b440'}}>
            <Grid container spacing={2} sx={{mt:4,}} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{pl:10}}>
                        <Typography sx={{color:'#000000',fontSize:26,py:5,ml:1}} >
                            Login
                        </Typography>
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                        { 
                       ! isLoading && <form onSubmit={handleSignIn}>
                            <FormControl sx={{m:1 ,width: '80%', }}>
                                <TextField id="input-with-sx" label="Your Email" 
                                type='email' 
                                name='email'
                                value ={values.email}
                                onChange ={handleChange('email')}
                                variant="standard" />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    } 
                                />
                                 <Typography style={{textAlign:'left'}}><Link to='/forgotPassword' style={{color:'red',textDecoration:'blink'}}>Forgot Password?</Link></Typography>
                            </FormControl>
                            
                            <br/>
                            <Button  type='submit' style={{
                            backgroundColor:'#82b440',
                            color: 'white',
                            width:'80%',
                            
                                }}
                                sx={{
                                    mt:2,
                                    py:2
                                }}>
                            Sign In
                        </Button>
                        </form>}
                        
                        {isLoading&& <CircularProgress sx={{ color:'red'}}/>
                        }
                        <Button  onClick={handleGoogleSignIn}style={{
                            backgroundColor:'red',
                            color: 'white',
                            width:'80%',
                            
                                }}
                                sx={{
                                    mt:2,
                                    py:2
                                    
                                    
                                }}>
                            <GoogleIcon  sx={{mr:2}}/>
                            Sign In Using Google
                        </Button>
                        <Typography sx={{pb:5}} >
                            Don't Have Account? <Link to='/signUp'style={{textDecoration:'blink', color:'#82b440'}}>Sign Up</Link>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={signInbanner} style={{width:800}} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignIn;