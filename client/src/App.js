import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import AppAboutUs from './components/AppAboutUs';
import LoginForm from './components/LoginForm';
import AppJewelry from './components/AppJewelry';
import AppWatches from './components/AppWatches';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterForm from './components/RegisterForm'
import PrivateRoute from './components/routing/PrivateRoute';
import AppPrivateRoute from './components/AppPrivateRoute';
import EmpMenu from './components/EmpMenu';
import ClientMenu from './components/ClientMenu';
import AppWish from './components/AppWish';
import AppAddForm from './components/AppAddForm'
import AppDeleteForm from './components/AppDeleteForm';
import AppFindForm from './components/AppFindForm';
import AppCart from './components/AppCart';
import AppProductDetails from './components/AppProductDetails';
import EmpStock from './components/EmpStock';
import AppStock from './components/AppStock';
import AppOrder from './components/AppOrder';
import PreviousOrders from './components/PreviousOrders';
import AppManageOrders from './components/AppManageOrders'

class App extends Component {

  render() { 
    
  return (
   
    <Router>
    <div className="App">
       <AppHeader/>
      <AppNavbar />
      <Switch>
      <PrivateRoute exact path="/front" component={EmpMenu} />
      <Route path="/welcome" component={ClientMenu}/>
      <Route path="/" exact component={AppContainer}/>
      <Route path="/jewelry"  component={AppJewelry}/>
      <Route path="/watches"  component={AppWatches}/>
      <Route path="/aboutus"  component={AppAboutUs}/>
      <Route path="/login"    component={LoginForm}/>
      <Route path="/cart"     component={AppCart}/>
      <Route path="/wish"     component={AppWish}/>
      <Route path="/register" component={RegisterForm}/>
      <Route exact path="/details/:id" component={AppProductDetails}/>
      <Route path="/add"  component={AppAddForm}/>
      <Route path="/edit" component={AppFindForm}/>
      <Route path="/delete"  component={AppDeleteForm}/>
      <Route path="/stock" component={AppStock}/>
      <Route path="/checkout"  component={AppOrder}/>
      <Route path="/orders"  component={PreviousOrders}/>
      <Route path="/manage"  component={AppManageOrders}/>
      </Switch>

      
    </div>
    </Router>
  
  );
}
}
export default App;
//<PrivateRoute exact path="/front" component={AppPrivateRoute} />