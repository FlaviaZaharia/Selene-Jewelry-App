import {useState,useEffect} from 'react';
import axios from 'axios';


const AppPrivateRoute=({history})=>{
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

    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        history.push("/");

    };


    return error ? (
      <span className="error-message">{error}</span>
    ) : (
      <div>
      <button onClick={handleLogout}>
          Logout
      </button>
      </div>
    );
  
}

export default AppPrivateRoute;