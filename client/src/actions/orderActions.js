import * as actionTypes from '../redux/orderConstants';
import axios from 'axios';
export const sendOrder=(userId,email,name,number,address,city,country,payment,shipping,products)=>async (dispatch,getState)=>{
  
    try  {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

      const { data } = await axios.post(
        "/api/order/send",
        {userId,email,name,number,address,city,country,payment,shipping,products},
        config
      );
      products.map((item)=>{
        const id=item.product;
        const name=item.name;
        const category=item.category;
        const material=item.material;
        const price=item.price;
        const quantity=item.quantity-Number(item.qty);
        const image=item.image;
        console.log(quantity);
        console.log(item);
        axios.put(
          `/api/items/find/${id}`,{name,category,material,price,quantity,image});
      })
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
      localStorage.removeItem("cart");
     // history.push("/");
      dispatch({
        type: actionTypes.ORDER_SENT,
      });
    }
    catch (error) {
        dispatch({
          type: actionTypes.ORDER_PENDING,
          payload: error.response && error.response.data.message,
        });
      }

}