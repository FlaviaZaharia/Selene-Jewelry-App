import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const CART=({ item, qtyChangeHandler, removeHandler })=>{

    return(
      <div className="cartitem">
      <div className="cartitem__image">
        <img width='100 px' src={item.image} alt={item.name} />
      </div>
      <Link to={`/details/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.quantity).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <IconButton><DeleteIcon style={{fontSize:'medium',color:"red"}}></DeleteIcon></IconButton>
      </button>
    </div>

    );
}

export default CART;