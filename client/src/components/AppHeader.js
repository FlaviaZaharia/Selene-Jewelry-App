import React, {Component} from 'react';
import AppLoginButton from'./AppLoginButton';
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