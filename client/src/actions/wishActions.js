import * as actionTypes from '../redux/wishConstants';
import axios from 'axios';

export const addToWish=(id)=>async (dispatch,getState)=>{
    const {data}=await axios.get(`/api/items/find/${id}`);
    dispatch({
        type:actionTypes.ADD_TO_WISH,
        payload:{
            product:data._id,
            name:data.name,
            category:data.category,
            material:data.material,
            price:data.price,
            quantity:data.quantity,
            image:data.image,
        }
    })
    localStorage.setItem("wish", JSON.stringify(getState().wish.wishItems));
};

export const removeFromWish=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_WISH,
        payload:id
    })

    localStorage.setItem("wish", JSON.stringify(getState().wish.wishItems));
}