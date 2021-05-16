import * as actionTypes from '../redux/wishConstants';
const WISH_INITIAL_STATE = {
    wishItems: [],
  };
export const wishReducer=(state={wishItems:[]},action)=>{

    switch (action.type) {
        case actionTypes.ADD_TO_WISH:
          const item = action.payload;
    
          const existItem = state.wishItems.find((x) => x.product === item.product);
    
          if (existItem) {
            return {
              ...state,
              wishItems: state.wishItems.map((x) =>
                x.product === existItem.product ? item : x
              ),
            };
          } else {
            return {
              ...state,
              cartItems: [...state.wishItems, item],
            };
          }
        case actionTypes.REMOVE_FROM_WISH:
          return {
            ...state,
            wishItems: state.wishItems.filter((x) => x.product !== action.payload),
          };
        default:
          return state;
      }
}