import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
import LoginForm from './LoginForm'
const AppOrder=({history})=>{

    const [address,setAddress]=useState("");
    const [number,setNumber]=useState("");
    const [payment,setPayment]=useState("");
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [name,setName]=useState("");
    const [error,setError]=useState("");
    const [shipping,setShipping]=useState("");
   
    const dispatch = useDispatch();
    

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const state = useSelector(state => {
        return state.userLogin;
      });
      const {userInfo} = state;

      const makeOrder=async(e)=>{
        e.preventDefault();
      
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        try {
           

             const userId=userInfo.user._id;
             const email=userInfo.user.email;
            const products=JSON.stringify(cartItems);
          const { data } = await axios.post(
            "/api/order/send",
            {userId,email,name,number,address,city,country,payment,shipping,products},
            config
          );
          //localStorage.removeItem("cart");
          history.push("/");
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }

      }

      const handleChange=async(e)=>{
          setPayment(e.target.value);
      }
      const Shipping=[{value:"DHL"},{value:"SameDay"},{value:"FedEx"}]
    return(
        <div className="loginForm">
          {!userInfo?(<LoginForm/>):(<form onSubmit={makeOrder}>
            <h2>Checkout</h2>
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
        <div onChange={handleChange}>
        <input type="radio" value="Cash" name="payment" /> Cash<br/>
        <input type="radio" value="Card" name="payment" /> Card
        </div>
        </div>
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
        
        <div className="submitButton">
        <button  className='btnn' >Order</button>
        </div> 
        </form> )}
        
        </div>
    );
}

export default AppOrder;