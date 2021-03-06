import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import CART from './CART'
const AppCart=()=>{
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    useEffect(() => { }, []);
  
    const qtyChangeHandler = (id, qty) => {
      dispatch(addToCart(id, qty));
    };
  
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  
    const getCartSubTotal = () => {
      return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0)
        .toFixed(2);
    };
  
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Shopping Cart</h2>
  
            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/"><br/>Check our collections</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CART
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>
          <br/>
          <br/>
          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            
          </div>
          <div className="submitButton">
            {cartItems.length!==0?(<Link to='/checkout'><button>Proceed To Checkout</button></Link>):(<p></p>)}
             
            </div>
        </div>
      </>
    );



    
}

export default AppCart;