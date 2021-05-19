
//nou
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../actions/authActions';
import {register} from '../actions/authActions';
const RegisterForm =({history})=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [errors,setErrors]=useState("");
    //Grab pieces of data from our store that we care about
  
    const state = useSelector(state => {
      return state.userLogin;
    });
    const { loading, userInfo, error } = state;
    useEffect(() => {
      if (userInfo) history.push('/welcome');
    }, [state]);
    const registerHandler = async (e) => {
      e.preventDefault();
      if(password.length<6)
      setErrors("Password minimum length is 6");
      setTimeout(() => {
        setErrors("");
      }, 5000);
    
      dispatch(register(name,email, password));
      

    };

 return(

<div className="registerForm">
                <br></br>
                <p className="titleForm">  Registration </p> 
                <form onSubmit={registerHandler}>
                    {errors?(<span>{errors}</span>):(error?(<span>{error}</span>):(<></>))}
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
                <br/>
                <div className="submitButton">
                <button  className='btn' >Register</button>
                <br/>
                <br/>
                <span className="subsol">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account?<Link to="/login">Login</Link></span>
                </div>
                </form>
            </div>


);
}

export default RegisterForm;
