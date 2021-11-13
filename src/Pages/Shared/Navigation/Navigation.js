import { Login, Logout } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar, Divider, Hidden, ListItemIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useProducts from '../../../Hooks/useProducts';
import logo from '../../../images/logo1.png';



const Navigation = ()=> {
  const {user,logOut} = useAuth();
  const {cartProduct} = useProducts();
   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    {user?.email ?
    <Box>
    <MenuItem>
      <Avatar src={user.photoURL}/> 
      
      {user.displayName}
      
    </MenuItem>
    <MenuItem >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard" style={{textDecoration:'none',color:'#545454' }}> Dashboard</Link>
    </MenuItem>
    {/* <MenuItem>
      <Avatar /> My account
    </MenuItem> */}
    <Divider />
    <MenuItem onClick={logOut}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      SigOut
    </MenuItem>
    </Box>:
    <MenuItem >
    <ListItemIcon>
      <Login fontSize="small" style={{color:'#82b440'}}/>
    </ListItemIcon>
    <Link to="/signIn" style={{textDecoration:'none',color:'#82b440' }}>SignIn</Link>
  </MenuItem>
}
  </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleClick}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} style={{position:'relative', zIndex:'10'}}>
      <AppBar position="static" style={{backgroundColor:'transparent', color:'black' }}>
        <Toolbar sx={{}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Hidden smDown>
                    <IconButton>
                        <img src={logo} alt="" srcset="" style={{ width:150}}/>
                    </IconButton>
                     <Link to='/home' style={{textDecoration:'none',color:'#444444'}} >
                    <Button color="inherit" sx={{mx:4}} >HOME</Button>
                    </Link>
                     <Link to='/ourProducts' style={{textDecoration:'none',color:'#444444'}} >
                    <Button color="inherit" sx={{mx:4}} >OUR PRODUCTS</Button>
                    </Link>
                   
                    <Link to='/home' style={{textDecoration:'none',color:'#444444'}} >
                    <Button color="inherit" sx={{mx:4}} >Services</Button>
                    </Link>
                   
                     
                     <Link to='/home' style={{textDecoration:'none',color:'#444444'}} >
                    <Button color="inherit" sx={{mx:4}} >Blog</Button>
                    </Link>
                     <Link to='/home' style={{textDecoration:'none',color:'#444444'}} >
                    <Button color="inherit" sx={{mx:4}} >Reviews</Button>
                    </Link>
                    
                </Hidden>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartProduct.length} color="error">
                <ShoppingBasketIcon/>
              </Badge>
            </IconButton>
           
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default Navigation;