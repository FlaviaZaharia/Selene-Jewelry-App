import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
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
              <img  width='400px' height='300px' src={product.image} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p><b>Price: {product.price}$</b></p>
              <p><b>Category: {product.category}</b></p>
              <p><b>Material: {product.material}</b></p>
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
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>


      );
}
export default AppProductDetails;