import * as actionTypes from '../redux/cartConstants';
const CART_INITIAL_STATE = {
    cartItems: [],
  };
export const cartReducer=(state={cartItems:[]},action)=>{

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
          const item = action.payload;
    
          const existItem = state.cartItems.find((x) => x.product === item.product);
    
          if (existItem) {
            return {
              ...state,
              cartItems: state.cartItems.map((x) =>
                x.product === existItem.product ? item : x
              ),
            };
          } else {
            return {
              ...state,
              cartItems: [...state.cartItems, item],
            };
          }
        case actionTypes.REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== action.payload),
          };
          case actionTypes.CLEAR_CART:
            return {
              ...state,
              cartItems:[]
            }
        default:
          return state;
      }
      
}