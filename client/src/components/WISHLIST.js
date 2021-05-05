import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const WISHLIST=({ item, removeHandler })=>{

    return(
      <div className="cartitem">
      <div className="cartitem__image">
        <img width='100 px' src={item.image} alt={item.name} />
      </div>
      <Link to={`/details/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <IconButton><DeleteIcon style={{fontSize:'medium',color:"red"}}></DeleteIcon></IconButton>
      </button>
    </div>

    );
}

export default WISHLIST;