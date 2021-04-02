import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import UserStore from './stores/UserStores';
import LoginForm from './components/LoginForm';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import {observer} from 'mobx-react';
import AppJewelry from './components/AppJewelry';
import AppWatches from './components/AppWatches';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AppAboutUs from './components/AppAboutUs';
import RegisterForm from './components/RegisterForm'
import AppLoginButton from './components/AppButtons';
class App extends Component {
  /*
  //ceva pt LOG IN
  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success) {
        UserStore.loading=false;
        UserStore.isLoggedIn=true;
        UserStore.username=result.username;
      }
      else {
        UserStore.loading=false;
        UserStore.isLoggedIn=false;
      }
    }
    catch(e) {
      UserStore.loading=false;
      UserStore.isLoggedIn=false;
    }
  }
  //LOG OUT
  async doLogOut() {
    try {
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(UserStore.loading) {
        UserStore.isLoggedIn=false;
        UserStore.username='';
      }
      else {
          if (UserStore.isLoggedIn) {
            return (
              <div className="app">
                <div className="container" >
                  Welcome {UserStore.username}
                </div>
              </div>
            )
          }
      }
    }
    catch(e) {
     console.log(e);
    }
  } */

  render() { 
    /*if(UserStore.loading) {
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait...
          </div>
        </div>
      )
    } */
  return (
    <Router>
    <div className="App">
       <AppHeader/>
      <AppNavbar />
      <Switch>
      {/* Route path="/" exact component={AppContainer}  */} 
      <Route path="/jewelry"  component={AppJewelry}/>
      <Route path="/watches"  component={AppWatches}/>
      <Route path="/aboutus"  component={AppAboutUs}/>
      <Route path="/login" component={AppLoginButton}/>
      {/*<LoginForm/> */}
      <RegisterForm/>
      </Switch>
    
    </div>
    </Router>
  );
}
}

//export default observer(App);
export default App;
