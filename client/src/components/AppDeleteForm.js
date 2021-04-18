import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AppDeleteForm = ({ history }) => {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
  
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
                <p> Delete product</p> 
                <form onSubmit={deleteHandler}>
                    {error&&<span>{error}</span>}
                
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
                <button  className='btnn' >Delete</button>
                </div> 
                </form>
            </div>


);
}

export default AppDeleteForm;