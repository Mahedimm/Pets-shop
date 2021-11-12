import { Alert, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import React from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'40%',
    height:'50%',
    bgcolor: 'background.paper',
    
    borderRadius:'15px',
    boxShadow: 24,
    p: 4,
  };
const MakeAdmin = () => {
    const [success,setSuccess] = React.useState(false);
  
   const [values, setValues] = React.useState({
    adminName: '',
    adminEmail:'',
   
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };
    
  const handleSubmit = e =>{
    const admin = {email:values.adminEmail} ;

    fetch('http://localhost:5000/users/admin',{
        method: 'PUT',
        headers: {
          
            'content-type': 'application/json'
        },
        body: JSON.stringify(admin)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            console.log(data);
            setSuccess(true);
           
        }
        
    })
    setValues({
        adminName: '',
        adminEmail:'',
    })
   
    e.preventDefault();
}
    return (
        <div>
             <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h4" component="h2" sx={{my:3, textAlign:'center',color:'#1CC7C1'}}>
                    Add Admin
                    </Typography>
                    {
                success && <Alert sx={{mb:5,backgroundColor:'#1CC7C1'}} variant="filled" severity="success">
                New Admin Create Successfully !
              </Alert>
             }
                    
                    <form onSubmit={handleSubmit}
                style={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'80%'
                }}>
                        
                      
                        <TextField
                        sx={{width:'100%',my:1}}
                        // id="outlined-size-small"
                        name="adminEmail"
                        onChange ={handleChange('adminEmail')}
                        label=" Admin Email" 
                        // defaultValue={user.email}
                        
                        />
                     
                          <Button onClick={handleSubmit}style={{
                              backgroundColor:'#19D3AE',
                               color:'white' }} 
                               sx={{px:3,py:1}} > 
                               Make Admin
                          </Button>
                           
                      
                    </form>
                </Box>
        </div>
    );
};

export default MakeAdmin;