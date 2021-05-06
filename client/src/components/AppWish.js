import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWish, removeFromWish } from "../actions/wishActions";
import WISHLIST from './WISHLIST'
const AppWish=()=>{
    const dispatch = useDispatch();

    const wish = useSelector((state) => state.wish);
    const { wishItems } = wish;
  
    useEffect(() => {}, []);
    
    const addToWishHandler = (id) => {
        dispatch(addToWish(id));
    }
    const removeFromWishHandler = (id) => {
      dispatch(removeFromWish(id));
    };
  
    const getWishCount = () => {
      return wishItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  
  
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Wishlist</h2>
  
            {wishItems.length === 0 ? (
              <div>
                Your Wishlist Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              wishItems.map((item) => (
                <WISHLIST
                  key={item.product}
                  item={item}
                  removeHandler={removeFromWishHandler}
                />
              ))
            )}
          </div>
  
          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getWishCount()}) items</p>
            </div>

          </div>
        </div>
      </>
    );



    
}

export default AppWish;