import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { addToWish } from "../actions/wishActions";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const AppProductDetails=({match,history})=>{

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
  
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        if (product && match.params.id !== product._id) {
          dispatch(getProductDetails(match.params.id));
        }
      }, [dispatch, match, product]);

      const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
      };
      const addToWishHandler=()=> {
        dispatch(addToWish(product._id));
        history.push(`/wish`);
      }

      return(
<div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img  width='500px' height='300px' src={product.image} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Material: {product.material}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <IconButton className="btn"> 
                  <ShoppingBasketIcon></ShoppingBasketIcon>
                </IconButton>
                <br></br>
                <IconButton className="btn">
                 <FavoriteIcon></FavoriteIcon>
                </IconButton>
              </p>
            </div>
          </div>
        </>
      )}
    </div>


      );
}
export default AppProductDetails;