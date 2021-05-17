import { Link } from "react-router-dom";
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const WISHLIST=({ name,price,image,id})=>{

    const removeHandler = async () => {
    await axios.delete(
      `/api/wishlist/delete/${id}`,
      {id}
     
    ); }

    return(
      <div className="cartitem">
      <div className="cartitem__image">
        <img width='100 px' src={image} alt={name} />
      </div>
        <p>{name}</p>
      <p className="cartitem__price">${price}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler()}
      >
        <IconButton><DeleteIcon style={{fontSize:'medium',color:"red"}}></DeleteIcon></IconButton>
      </button>
    </div>

    );
}

export default WISHLIST;