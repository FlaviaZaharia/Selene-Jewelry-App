import {useState,useEffect} from 'react';
import axios from 'axios';
import ClientMenu from './ClientMenu';
import EmpMenu from './EmpMenu';
import AppAddForm from './AppAddForm';
import AppDeleteForm from './AppDeleteForm';
import PrivateRoute from './routing/PrivateRoute';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AppContainer from './AppContainer';
export const AppPrivateRoute=({history})=>{
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
  
    useEffect(() => {
      const fetchPrivateDate = async () => {
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
  
      fetchPrivateDate();
    }, []);

    handleLogout=function() {
        localStorage.removeItem("authToken");
        history.push("/");
        
    };
  
    return error ? (
      <span className="error-message">{error}</span>
    ) : (
      <Router>
    <div className="Emp">
      <Switch>
      <PrivateRoute exact path="/front" component={EmpMenu} />
      <Route path="/add"  component={AppAddForm}/>
      <Route path="/delete"  component={AppDeleteForm}/>
      <Route path="/" component={EmpMenu} />
      </Switch>
      
    </div>
    
    </Router>
    
    );
  
}
export function handleLogout(){};
export default AppPrivateRoute;
