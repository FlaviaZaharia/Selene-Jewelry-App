
//nou
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const RegisterForm =({history})=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const registerHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
  
      try {
        const { data } = await axios.post(
          "/api/auth/register",
          {
            name,
            email,
            password,
          },
          config
        );
  
        localStorage.setItem("authToken", data.token);
        history.push("/front");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };

 return(

<div className="registerForm">
                <br></br>
                <p> Registration </p> 
                <form onSubmit={registerHandler}>
                    {error&&<span>{error}</span>}
                <div className='form-inputs'>
                <label htmlFor='name' className='form-label'>
                    Name: 
                </label>
                <input
                    type='text' required
                    id='name'
                    className='input'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}

                   
                />
                </div>
                
                <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>
                    Email: 
                </label>
                <input
                    type='email' required
                    id='email'
                    className='input'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                   
                />
                </div>

                <div className='form-inputs'>
                <label htmlFor='password' className='form-label'>
                    Password: 
                </label>
                <input
                    type="password"
                    required
                    id='password'
                    className='input'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                <div className="submitButton">
                <button  className='btnn' >Register</button>
                <span>Already have an account?<Link to="/login">Login</Link></span>
                </div>
                </form>
            </div>


);
}

export default RegisterForm;
