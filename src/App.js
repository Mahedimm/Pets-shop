import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Account/PrivateRoute/PrivateRoute";
import SignIn from "./Pages/Account/SignIn/SignIn";
import SignUp from "./Pages/Account/SignUp/SignUp";
import ConfirmOrder from "./Pages/ConfirmOrder/ConfirmOrder";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import OurProducts from "./Pages/OurProducts/OurProducts";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import UserOrder from "./Pages/UserOrder/UserOrder";
function App() {
   
  return (
    <div className="">
      <AuthProvider>
    <Router>
    <Switch>
            <Route path="/about">
            <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/userOrder">
              <UserOrder />
            </Route>
            <Route path="/ourProducts">
              <OurProducts />
            </Route>
            <PrivateRoute path="/confirmOrder">
              <ConfirmOrder />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path='/product/:productId'>
              <ProductDetails />
            </Route>
          </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
