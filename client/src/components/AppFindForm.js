import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AppFindForm = ({ history }) => {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [material, setMaterial] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);
    const [items,setItems]=useState([]);

    useEffect(() => {
      getItems();
    }, []);
  

    const getItems=async()=>{
     await axios.get('api/items/retrieve').then(rezultat => setItems(rezultat.data));
    }
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
        setImage(data.image);
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
                <br></br>
                <p className="title"> Find product</p> 
                <form onSubmit={findHandler}>
                <div className='form-input'>
                <label htmlFor='id' className='form-label'>
                    Find product:
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
                <button  className='btn' >Find product</button>
                </div> 
                </form>
                
                <br></br>
                <p className="title"> Update product details</p> 
                <form onSubmit={updateHandler}>
                
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
                <select onChange={(e)=>setCategory(e.target.value)} defaultValue={category} className='input'>
                  <option selected required>{category}</option>
                  {Categories.filter(({val})=>
                    val!==category
                  ).map(({val})=>
                  <option key={val}>{val}</option>
                  )}
                </select>
                </div>

                <div className='form-inputs'>
                <label htmlFor='material' className='form-label'>
                    Material: 
                </label>
                <br/>
                <select onChange={(e)=>setMaterial(e.target.value)} defaultValue={material} className='input'>
                  <option selected required>{material}</option>
                  {Materials.filter(({val})=>
                    val!==material
                  ).map(({val})=>
                  <option  key={val} >{val}</option>
                  )}
                </select>
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
                <div className='form-inputs'>
                <label htmlFor='image' className='form-label'>
                    Image: 
                </label>
                <input
                  type="file" 
                  name="file"
                  className='input'
                  placeholder="Upload an image"
                  onChange={uploadImage}
                  />
                </div>
                <div className='form-inputs'>
                <img src={image} width='300px' height='300px'/>
                </div>
                <br/>
                {error&&<span style={{fontSize:"x-large",color:"black"}}>{error}</span>}
                <div className="submitButton">
                <button  className='btn' >Update product</button>
                </div> 
                </form>
            </div>


);
}

export default AppFindForm;