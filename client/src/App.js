import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() { 
  return (
    <div className="App">
      <AppHeader/>
     <AppNavbar />
     <AppContainer/>
    </div>
  );
}
}

export default App;
