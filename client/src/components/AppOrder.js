import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
import LoginForm from './LoginForm'
import { Button, ButtonGroup } from 'reactstrap';
import {clearCart} from '../actions/cartActions'
const AppOrder=({history},props)=>{

    const [address,setAddress]=useState("");
    const [number,setNumber]=useState("");
    const [payment,setPayment]=useState(null);
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [name,setName]=useState("");
    const [error,setError]=useState("");
    const [shipping,setShipping]=useState("");
    const [cardNr,setCardNr]=useState("");
    const [status,setStatus]=useState("Pending");
   
    
    const dispatch=useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const order=useSelector((state)=>state.order)
    const state = useSelector(state => {
        return state.userLogin;
      });
      const {userInfo} = state;
      const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };
      let transport;
      let total= cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
      if(total<200)
      transport=5;
      else
      transport=0;
      const makeOrder=async(e)=>{
        e.preventDefault();
       const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
  

        try {
            //const total=cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
             const userId=userInfo.user._id;
             const email=userInfo.user.email;
            const products=[];
            Array.prototype.push.apply(products, cartItems);
            //console.log(products);
           //await axios.delete("/api/order/delete",{});
          const { data } = await axios.post(
            "/api/order/send",
            {userId,email,name,number,address,city,country,payment,cardNr,shipping,products,total,transport,status},
            config
          );
         
          console.log(data);
          //cartItems.map((item)=>{
           // axios.put(`/api/order/update/${data._id}`,{userId,item},config);
         // })
          updateItems();
          //localStorage.removeItem("cart");
         // window.location.reload();
         dispatch(clearCart());
          history.push("/");
         // cartItems=[];
       } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      
      }
          
    
      
      const updateItems=()=>{
        cartItems.map((item)=>{
          const id=item.product;
          const name=item.name;
          const category=item.category;
          const material=item.material;
          const price=item.price;
          const quantity=item.quantity-Number(item.qty);
          const image=item.image;
          axios.put(
            `/api/items/find/${id}`,{name,category,material,price,quantity,image});
        })
      }



      const handleChange=async(e)=>{
          setPayment(e.target.value);
      }
      const Shipping=[{value:"DHL"},{value:"SameDay"},{value:"FedEx"}]
    return(
        <div className="loginForm">
          {!userInfo?(<LoginForm/>):(<form onSubmit={makeOrder}>
            <h2>Checkout</h2>
            {error&&<span>{error}</span>}
            <div className='form-input'>
        <label htmlFor='name' className='form-label'>
           Name:
        </label>
        <input
            type='text' required
            id='name'
            className='input'
            placeholder='Enter name'
            value={name}
            onChange={(e)=>setName(e.target.value)}

        />
        </div>
        <div className='form-input'>
        <label htmlFor='name' className='form-label'>
            Phone number:
        </label>
        <input
            type='text' required
            id='number'
            className='input'
            placeholder='Enter phone number'
            value={number}
            onChange={(e)=>setNumber(e.target.value)}

           
        />
        </div>

        <div className='form-inputs'>
        <label htmlFor='category' className='form-label'>
            Address: 
        </label>
        <br/>
        <input
            type='text' required
            id='address'
            className='input'
            placeholder='Enter address'
            value={address}
            onChange={(e)=>setAddress(e.target.value)}

           
        />
        
        </div>
        <div className='form-inputs'>
        <label htmlFor='category' className='form-label'>
            City: 
        </label>
        <br/>
        <input
            type='text' required
            id='city'
            className='input'
            placeholder='Enter city'
            value={city}
            onChange={(e)=>setCity(e.target.value)}

           
        />
        
        </div>
        
        <div className='form-inputs'>
        <label htmlFor='price' className='form-label'>
            Country: 
        </label>
        <input
            type="text" required
            id='country'
            className='input'
            placeholder='Enter country'
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
        />
        </div>
        <div className='form-inputs'>
        <label htmlFor='shipping' className='form-label'>
           Payment Method:
        </label>
        </div>
        <ButtonGroup >
        <Button className="payment" onClick={() => setPayment("Cash")} active={payment === "Cash"}>Cash</Button>
        <Button className="payment" onClick={() => setPayment("Card")} active={payment === "Card"}>Card</Button>
      </ButtonGroup>
      <div>{payment===null?(<p>Please choose a payment method from above</p>):(payment==="Card"?(<div>Card number<input
            type="text" required
            id='card'
            className='input'
            placeholder='Enter card number'
            value={cardNr}
            onChange={(e)=>setCardNr(e.target.value)}
        /></div>):(<p>Cash payment</p>))}</div>
        <div className='form-inputs'>
        <label htmlFor='shipping' className='form-label'>
           Shipping Company:
        </label>
        <select onChange={(e)=>setShipping(e.target.value)} defaultValue={""} className='input' required>
                  <option selected></option>
                  {Shipping.map(({value})=>
                  <option  key={value}>{value}</option>
                  )}
                </select>
        </div>
        <br/>
        <div>{getCartSubTotal()>200?(<p>Subtotal ${getCartSubTotal()} </p>):(<div><p>Subtotal ${getCartSubTotal()}</p><p>Shipping $5.00</p><p>Total ${(Number(getCartSubTotal())+5.00).toFixed(2)}</p></div>)}
          
          </div>
        <div className="submitButton">
        <button  className='btnn' >Order</button>
        </div> 
        </form> )}
        
        </div>
    );
}

export default AppOrder;