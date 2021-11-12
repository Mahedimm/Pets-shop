import { AddCircleOutline, AdminPanelSettings } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReorderIcon from '@mui/icons-material/Reorder';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Account/AdminRouter/AdminRoute';
import UserOrder from '../../UserOrder/UserOrder';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const drawerWidth = 240;
function Dashboard(props) {
    const{admin} = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Divider />
      {
        admin ?
      
      <List>
       <Link to='/' style={{textDecoration:'none',color:'#262626'}}>
          <ListItem button >
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText s>
              Home
            </ListItemText>
          </ListItem>
      </Link>
       <Link to={`${url}/orders`} style={{textDecoration:'none',color:'#262626'}}>
          <ListItem button >
            <ListItemIcon>
            < ReorderIcon/>
            </ListItemIcon>
            <ListItemText>
              All Orders
            </ListItemText>
          </ListItem>
      </Link>
       <Link to={`${url}/makeAdmin`} style={{textDecoration:'none',color:'#262626'}}>
          <ListItem button >
            <ListItemIcon>
           <AdminPanelSettings/>
            </ListItemIcon>
            <ListItemText>
              Make Admin
            </ListItemText>
          </ListItem>
      </Link>
       <Link to={`${url}/addProduct`} style={{textDecoration:'none',color:'#262626'}}>
          <ListItem button >
            <ListItemIcon>
           <AddCircleOutline/>
            </ListItemIcon>
            <ListItemText>
              Add Product
            </ListItemText>
          </ListItem>
      </Link>
      </List>:
      <List>
      <Link to='/' style={{textDecoration:'none',color:'#262626'}}>
         <ListItem button >
           <ListItemIcon>
            <HomeIcon/>
           </ListItemIcon>
           <ListItemText>
             Home
           </ListItemText>
         </ListItem>
     </Link>
      <Link to={`${url}/myOrders`} style={{textDecoration:'none',color:'#262626'}}>
         <ListItem button >
           <ListItemIcon>
          < ReorderIcon/>
           </ListItemIcon>
           <ListItemText>
             Your Orders
           </ListItemText>
         </ListItem>
     </Link>
      <Link to={`${url}/review`} style={{textDecoration:'none',color:'#262626'}}>
         <ListItem button >
           <ListItemIcon>
            <RateReviewIcon />
           </ListItemIcon>
           <ListItemText>
             Review
           </ListItemText>
         </ListItem>
     </Link>

     </List>
      }
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{backgroundColor:'#82b440'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        <Switch>
        <Route exact path={path}>
          <DashboardHome/>
        </Route>
        <Route  path={`${path}/myOrders`}>
          <UserOrder/>
        </Route>
        <Route path={`${path}/review`}>
          <AddReview/>
        </Route>
        <Route path={`${path}/addProduct`}>
          <AddProduct />
        </Route>
        <AdminRoute exact path={path}>
          <DashboardHome/>
        </AdminRoute>
        <AdminRoute  path={`${path}/orders`}>
          <AllOrders/>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct />
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
