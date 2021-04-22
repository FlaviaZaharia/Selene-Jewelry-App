import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AppAddForm = ({ history }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState("");

    const [fileInputState,setFileInputState]=useState("");

    const addHandler = async (e) => {
      e.preventDefault();
     
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "/api/items/add",
          {name,category,material,price,quantity,fileInputState},
          config
        );
  
        history.push("/");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };


  

 return(

<div className="loginForm">
                <br></br>
                <p> Add new product</p> 
                <form onSubmit={addHandler}>
                    {error&&<span>{error}</span>}
                
                <div className='form-input'>
                <label htmlFor='name' className='form-label'>
                    Name
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

                <div className='form-inputs'>
                <label htmlFor='category' className='form-label'>
                    Category: 
                </label>
                <input
                    type="text" required
                    id='category'
                    className='input'
                    placeholder='Enter category'
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />
                </div>
                <div className='form-inputs'>
                <label htmlFor='material' className='form-label'>
                    Material: 
                </label>
                <input
                    type="text" required
                    id='material'
                    className='input'
                    placeholder='Enter material'
                    value={material}
                    onChange={(e)=>setMaterial(e.target.value)}
                />
                </div>
                <div className='form-inputs'>
                <label htmlFor='price' className='form-label'>
                    Price: 
                </label>
                <input
                    type="text" required
                    id='price'
                    className='input'
                    placeholder='Enter price'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                </div>

                <div className='form-inputs'>
                <label htmlFor='quantity' className='form-label'>
                    Quantity: 
                </label>
                <input
                    type="text" required
                    id='quantity'
                    className='input'
                    placeholder='Enter quantity'
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                />
                </div>
                <div className="submitButton">
                <button  className='btnn' >Save new product</button>
                </div> 
                </form>
                <br/>
                <div>
                  Image preview:
                </div>
              
                
            </div>


);
}

export default AppAddForm;