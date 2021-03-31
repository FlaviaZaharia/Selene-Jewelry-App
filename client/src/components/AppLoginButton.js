import React, {Component} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
class AppLoginButton extends Component{
render(){
return(
    <div className="iconite">
    <IconButton className="btn">
        <AccountCircleIcon>
            </AccountCircleIcon></IconButton>
            <IconButton className="btn">
        <FavoriteIcon></FavoriteIcon>
        </IconButton>
        <IconButton className="btn"> 
            <ShoppingBasketIcon></ShoppingBasketIcon>
            </IconButton>

    </div>
);
}

}

export default AppLoginButton;