import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { addToWish } from "../actions/wishActions";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button, Popover, PopoverHeader, PopoverBody,UncontrolledPopover } from 'reactstrap';
import axios from "axios";
const AppProductDetails=({match,history},props)=>{

    const [qty, setQty] = useState(1);
    const [exists,setExists]=useState(false);
    const [wish,setWish]=useState([]);
    const dispatch = useDispatch();
    let yes={};
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    const state = useSelector(state => {
      return state.userLogin;
    });
    const {userInfo} = state;
    const getwishItems=async()=>{
      await axios.get("/api/wishlist/get").then(rezultat => setWish(rezultat.data));
    }
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

  useEffect(() => {
        if (product && match.params.id !== product._id) {
          dispatch(getProductDetails(match.params.id));
        }
        getwishItems();
       
      }, [dispatch, match, product]);
      const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
      };
      
    if(userInfo)
    yes=wish.find((item)=>item.email===userInfo.user.email&&item.products[0]._id===product._id);
      const addToWishHandler= async ()=> {
        //dispatch(addToWish(product._id));
        const userId = userInfo.user._id;
        const email = userInfo.user.email;
        const products=[];
           // Array.prototype.push(products, product);
        products.push(product);
        await axios.post('/api/wishlist/send',{userId,email,products});

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
        
                  <button className="btn" onClick={addToCartHandler}>
                    Add to cart
                  </button>
                <br></br>
                {!userInfo?(<><button  id="PopoverFocus" className="btn" >
                  Add to wishlist
                </button><UncontrolledPopover  placement="bottom" trigger="focus" isOpen={popoverOpen} target="PopoverFocus" toggle={toggle}>
        <PopoverBody>Please log in to add items to Wishlist</PopoverBody>
      </UncontrolledPopover></>):(yes!==undefined?(<button className="btn" disabled>Already in Wishlist</button>):(<button className="btn" onClick={addToWishHandler}>
                  Add to wishlist
                </button>))}
                
              </p>
            </div>
          </div>
        </>
      )}
    </div>


      );
}
export default AppProductDetails;