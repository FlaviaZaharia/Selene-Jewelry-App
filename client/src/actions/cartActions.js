import * as actionTypes from '../redux/cartConstants';
import axios from 'axios';

export const addToCart=(id,qty)=>async (dispatch,getState)=>{
    const {data}=await axios.get(`/api/items/find/${id}`);
    dispatch({
        type:actionTypes.ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            category:data.category,
            material:data.material,
            price:data.price,
            quantity:data.quantity,
            image:data.image,
            qty
        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const clearCart=()=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.CLEAR_CART
    })
    localStorage.removeItem("cart");
}
