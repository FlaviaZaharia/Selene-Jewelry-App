import {useState,useEffect} from 'react';
import axios from 'axios';


const AppAddForm = ({ history }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState("");
    
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);

    const uploadImage=async e=>{
      const files=e.target.files;
      const data=new FormData();
      data.append("file",files[0]);
      data.append("upload_preset","q57kq7w1");
      setLoading(true);
      const response=await fetch(
          " https://api.cloudinary.com/v1_1/djfe4eels/image/upload",
          {
              method:"POST",
              body:data
          }
      )
      const file=await response.json();
      console.log(file);
      setImage("https://res.cloudinary.com/djfe4eels/image/upload/"+file.public_id);
      setLoading(false);
  }
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
          {name,category,material,price,quantity,image},
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

    const Categories=[{val:"Rings",id:'1'},{val:"Earrings",id:'2'},{val:"Necklaces",id:'3'},{val:"Watches",id:'4'},{val:"Bracelets",id:'5'}];
    const Materials=[{val:"Silver",id:'1'},{val:"Gold",id:'2'},{val:"Stainless steel",id:'3'}];
  

 return(

<div className="loginForm">
               
                <p> Add new product</p> 
                <form onSubmit={addHandler}>
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
                <br/>
                <select onChange={(e)=>setCategory(e.target.value)} defaultValue={""} className='input' required>
                  <option selected></option>
                  {Categories.map(({val})=>
                  <option key={val} >{val}</option>
                  )}
                </select>
                
                </div>

                <div className='form-inputs'>
                <label htmlFor='category' className='form-label'>
                    Material: 
                </label>
                <br/>
                <select onChange={(e)=>setMaterial(e.target.value)} defaultValue={""} className='input' required>
                  <option selected></option>
                  {Materials.map(({val})=>
                  <option  key={val}>{val}</option>
                  )}
                </select>
                
                </div>
                <div className='form-inputs'>
                <label htmlFor='price' className='form-label'>
                    Price: 
                </label>
                <input
                    type="number" required
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
                    type="number" required
                    id='quantity'
                    className='input'
                    placeholder='Enter quantity'
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                />
                </div>
                <div className='form-inputs'>
                <label htmlFor='image' className='form-label'>
                    Image: 
                </label>
                <input
                  type="file" required
                  name="file"
                  className='input'
                  placeholder="Upload and image"
                  onChange={uploadImage}
                  />
                </div>
                <br/>
                {loading?(<h2>Loading...</h2>):(<img  width='300 px' height='300 px' border-radius="40px" src={image}/>)}
                <div className="submitButton">
                <button  className='btnn' >Save new product</button>
                </div> 
                </form> 
                <br/>   
                     
            </div>


);
}
export const addHandler=async (e) => {};
export default AppAddForm;