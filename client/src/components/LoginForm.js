//nou
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


//nou
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../actions/authActions';
const LoginForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

//nou
const dispatch = useDispatch();

  //Grab pieces of data from our store that we care about

  const state = useSelector(state => {
    return state.userLogin;
  });
  const { loading, userInfo, error } = state;


 /* useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/front");
    }
  }, [history]);*/

  useEffect(() => {
    if (userInfo) history.push('/front');
  }, [state]);


  const loginHandler = async (e) => {
    e.preventDefault();

    /*const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/front");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }*/
    dispatch(login(email, password));
  };

  return (

    <div className="loginForm">
      <br></br>
      <p> Login</p>
      <form onSubmit={loginHandler}>
        {error && <span>{error}</span>}

        <div className='form-input'>
          <label htmlFor='email' className='form-label'>
            Email:
                </label>
          <input
            type='text' required
            id='email'
            className='input'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}


          />
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password:
                </label>
          <input
            type="password" required
            id='password'
            className='input'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submitButton">
          <button className='btnn' >Login</button>
          <span>New Member? Register <Link to="/register"> here</Link></span>
        </div>
      </form>
    </div>


  );
}

export default LoginForm;
