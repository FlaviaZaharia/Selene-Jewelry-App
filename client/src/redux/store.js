import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from '../reducers/cartReducers'
import {getProductDetailsReducer,getProductsReducer} from '../reducers/productReducers'
import { userReducer } from '../reducers/authReducer';


const reducer=combineReducers({
cart:cartReducer,
getProducts:getProductsReducer,
getProductDetails:getProductDetailsReducer,
userLogin:userReducer //nou
})

const middleware=[thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  //user
  const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  userLogin: { userInfo: userAuthFromStorage } //nou
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;