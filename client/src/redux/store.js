import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from '../reducers/cartReducers'
import {wishReducer} from '../reducers/wishReducer'
import {getProductDetailsReducer,getProductsReducer} from '../reducers/productReducers'
import { userReducer } from '../reducers/authReducer';

const reducer=combineReducers({
cart:cartReducer,
wish:wishReducer,
getProducts:getProductsReducer,
getProductDetails:getProductDetailsReducer,
userLogin:userReducer //nou

})

const middleware=[thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

//wish
const wishItemsInLocalStorage = localStorage.getItem("wish")
  ? JSON.parse(localStorage.getItem("wish"))
  : [];


  //user
  const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

 

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  wish: {
    wishItems: wishItemsInLocalStorage,
  },
  userLogin: { userInfo: userAuthFromStorage } //nou
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;