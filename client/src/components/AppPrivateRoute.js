import {useState,useEffect} from 'react';
import axios from 'axios';
import ClientMenu from './ClientMenu';
import AppAddForm from './AppAddForm';
import AppDeleteForm from './AppDeleteForm';
import PrivateRoute from './routing/PrivateRoute';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AppContainer from './AppContainer';
import AppFindForm from './AppFindForm';
import EmpMenu from './EmpMenu';
import EmpStock from './EmpStock';


//nou
import {logout} from '../actions/authActions'
import { useDispatch, useSelector } from 'react-redux';
export const AppPrivateRoute=({history})=>{
    //const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
  
    const dispatch = useDispatch();

    //Grab pieces of data from our store that we care about
  
    const state = useSelector(state => {
      return state.userLogin;
    });
    const { loading, userInfo, error } = state;

   // useEffect(() => {
      /*const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
        try {
          const { data } = await axios.get("/api/private", config);
          setPrivateData(data.data);
        } catch (error) {
          localStorage.removeItem("authToken");
          setError("You are not authorized please login");
        }
      };
  
      fetchPrivateDate();*/
      useEffect(() => {
        if (userInfo) history.push('/front');
      }, [state]);
    //}, []);

    
  
    return error ? (
      <span className="error-message">{error}</span>
    ) : (
      <Router>
    <div className="Emp">
      <Switch>
      <PrivateRoute exact path="/front" component={EmpMenu} />
      <Route path="/add"  component={AppAddForm}/>
      <Route path="/edit" component={AppFindForm}/>
      <Route path="/delete"  component={AppDeleteForm}/>
      <Route path="/stock" component={EmpStock}/>
      <Route path="/" component={EmpMenu} />
      </Switch>
      
    </div>
    
    </Router>
    
    );
  
}
//export function handleLogout(){};

export default AppPrivateRoute;

