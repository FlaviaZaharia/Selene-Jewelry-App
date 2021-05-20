import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AppDeleteForm = ({ history }) => {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [items,setItems]=useState([]);
    useEffect(() => {
      getItems();
    }, []);
  

    const getItems=async()=>{
     await axios.get('api/items/retrieve').then(rezultat => setItems(rezultat.data));
    }
    
    const deleteHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.delete(
          `/api/items/delete/${id}`,
          {id},
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
                <p className="title"> Delete product</p> 
                <form onSubmit={deleteHandler}>
                    {error&&<span>{error}</span>}
                
                <div className='form-input'>
                <label htmlFor='id' className='form-label'>
                    Items:
                </label>
                {/* <input
                    type='text' required
                    id='id'
                    className='input'
                    placeholder='Enter id'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}

                   
                /> */}



                 <select onChange={(e)=>setId(e.target.value)} defaultValue={""} className='input' required>
                  <option selected></option>
                  {items.map((item,index)=>
                  <option key={index} value={item._id}>Name:{item.name} Category:{item.category}</option>
                  )}
                </select> 
                </div>
 
                <div className="submitButton">
                <button  className='btn' >Delete</button>
                </div> 
                </form>
            </div>


);
}

export default AppDeleteForm;