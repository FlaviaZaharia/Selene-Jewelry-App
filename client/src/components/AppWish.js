import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWish, removeFromWish } from "../actions/wishActions";
import WISHLIST from './WISHLIST'
const AppWish=({key,item})=>{
  //const dispatch = useDispatch();

    const state = useSelector(state => {
      return state.userLogin;
  });
    const {userInfo} = state;

    const [wishItems,setWishItems]=useState([]);

    const getWishItems = () => {
      axios.get('/api/wishlist/get').then(rezultat => {setWishItems(rezultat.data);console.log(rezultat.data)});
      }

    


    useEffect(() => {getWishItems()}, []);
    
  
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
              wishItems.filter( (item)=> item.email===userInfo.user.email).map((item) => (
                <WISHLIST
                  key={item.products.map((wish)=>wish._id)}
                  name={item.products.map((wish)=>wish.name)}
                  price={item.products.map((wish)=>wish.price)}
                  image={item.products.map((wish)=>wish.image)}
                  id={item._id}
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