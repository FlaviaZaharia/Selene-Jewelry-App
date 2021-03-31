import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import AppJewelry from './components/AppJewelry';
import AppWatches from './components/AppWatches';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AppAboutUs from './components/AppAboutUs';
import AppLoginButton from './components/AppButtons';
class App extends Component {
  render() { 
  return (
    <Router>
    <div className="App">
       <AppHeader/>
      <AppNavbar />
      <Switch>
      <Route path="/" exact component={AppContainer}/>
      <Route path="/jewelry"  component={AppJewelry}/>
      <Route path="/watches"  component={AppWatches}/>
      <Route path="/aboutus"  component={AppAboutUs}/>
      <Route path="/login" component={AppLoginButton}/>
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
