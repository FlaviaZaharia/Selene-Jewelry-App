import React, {Component} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
class AppButtons extends Component{
render(){
return(
    
    <div className="iconite">
        <Link to='/login'>
            <IconButton className="btn">
                <AccountCircleIcon>
                </AccountCircleIcon>
            </IconButton>
        </Link>

        <Link to='/wish'>
            <IconButton className="btn">
                 <FavoriteIcon></FavoriteIcon>
            </IconButton>
        </Link>

        <Link to='/cart'>
            <IconButton className="btn"> 
                <ShoppingBasketIcon></ShoppingBasketIcon>
            </IconButton>
        </Link>
    </div>
);
}

}

export default AppButtons;