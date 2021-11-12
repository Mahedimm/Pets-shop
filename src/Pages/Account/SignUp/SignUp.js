import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, AlertTitle, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
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
import signUpbanner from '../../../images/signUpbanner.png';
const SignUp = () => {

    const {registerUser,isLoading,authError,user} = useAuth();
    const [flag,setFlag] = React.useState(true);
    const location = useLocation();
    const history = useHistory();
   
    
    const [values, setValues] = React.useState({
        password: '',
        password2: '',
        name:'',
        email:'',
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


      const handleSignUp =(e)=>{
            values.password !== values.password2?setFlag(false):setFlag(true);
             registerUser(values.name,values.email,values.password,history,location);
            
            setValues({
                password: '',
                password2: '',
                name:'',
                email:'',
                showPassword: false,
            })
            e.preventDefault();
      }
    return (
        <Container sx={{borderLeft: 3,borderColor:'#19D3AE'}}>
        <Grid container spacing={2} sx={{mt:4,}} alignItems="center">
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{pl:10}} >
                    <Typography sx={{color:'#000000',fontSize:26,py:5,ml:1}} >
                        Sign Up
                    </Typography>
                    
                     {user?.email&& <Alert severity="success" >
                        <AlertTitle >Success</AlertTitle>
                        Your Account Create — <strong><Link to='/signIn'style={{textDecoration:'blink', color:'#19D3AE'}}>Sign In</Link></strong>
                        </Alert>
                        }
                       {
                          authError && <Alert severity="error">
                         <AlertTitle>Sorry</AlertTitle>
                          {authError}<strong>TRY AGAIN!</strong>
                         </Alert>
                       } 
                    { !isLoading && 
                         <form onSubmit={handleSignUp}>
                        <FormControl sx={{m:1 ,width: '80%' }}>
                            <TextField id="input-with-sx" label="Your Name" 
                            type='name' 
                            name='name'
                            value ={values.name}
                            onChange ={handleChange('name')}
                            variant="standard" />
                        </FormControl>
                        <FormControl sx={{m:1 ,width: '80%' }}>
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
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password2'}
                                value={values.password2}
                                onChange={handleChange('password2')}
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
                        </FormControl>
                        {
                            flag!==true?<Typography sx={{textAlign:'left' ,ml:7, color:'red',}}>Don't match your password ,try again</Typography>:''
                        }
                        
                        
                        <br/>
                        <Button  type='submit' style={{
                        backgroundColor:'#82b440',
                        color: 'white',
                        width:'80%',
                        
                            }}
                            sx={{
                                mt:2,
                                ml:1,
                                py:2
                            }}>
                        Sign Up
                    </Button>
                    </form>
                    }

                     {
                    isLoading && <CircularProgress sx={{ color:'red',}}/>
                    } 
    
                    <Typography sx={{pb:5,ml:1}} >
                         Already have an account? <Link to='/signIn'style={{textDecoration:'blink', color:'#82b440'}}>Sign In</Link>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={signUpbanner}  alt="" srcset="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default SignUp;