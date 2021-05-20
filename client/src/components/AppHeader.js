import React, {Component} from 'react';
import AppLoginButton from'./AppButtons';
class AppHeader extends Component{
render(){
    return (
      <div>
          <h1>Selene Jewelry</h1>
          <AppLoginButton/>
      </div>

    );
}
}

export default AppHeader;