import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AppFindForm = ({ history }) => {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    

    const findHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.get(
          `/api/items/find/${id}`,
          {id},
          config
        );
        setName(data.name);
        setCategory(data.category);
        setMaterial(data.material);
        setPrice(data.price);
        setQuantity(data.quantity);
        //history.push(`/update/${id}`);
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };

    const updateHandler=async(e)=>{
        e.preventDefault();
  
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        try {
          const { data } = await axios.put(
            `/api/items/find/${id}`,
            {name,category,material,price,quantity},
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
                <p> Find product by Id</p> 
                <form onSubmit={findHandler}>
                
                <div className='form-input'>
                <label htmlFor='id' className='form-label'>
                    Id
                </label>
                <input
                    type='text' required
                    id='id'
                    className='input'
                    placeholder='Enter id'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}

                   
                />
                </div>
                <div className="submitButton">
                <button  className='btnn' >Find product</button>
                </div> 
                </form>
                
                <br></br>
                <p> Update product details</p> 
                <form onSubmit={updateHandler}>
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
                    id='price'
                    className='input'
                    placeholder='Enter quantity'
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                />
                </div>
                <div className="submitButton">
                <button  className='btnn' >Update product</button>
                </div> 
                </form>
            </div>


);
}

export default AppFindForm;