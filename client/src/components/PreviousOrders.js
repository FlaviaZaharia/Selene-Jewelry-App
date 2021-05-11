import axios from 'axios';
import { Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useState,useEffect} from 'react';
const PreviousOrders=({history})=>{
    const state = useSelector(state => {
        return state.userLogin;
      });
      const { loading, userInfo } = state;
      const [items,setItems]=useState();
      const [error,setError]=useState();
      const userId=userInfo.user._id;
      let id="6099c2038f6c503db41c74e5";
     const getItems = async(e) => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.get(
          `/api/order/find`,
          {userId},
          config
        );
       console.log(data);
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
      }
      useEffect(() => {
        getItems();
      },[]);
return(
  
   
    <Table striped>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Products</th>
          <th>Subtotal</th>
          <th>Transport</th>
          <th>Total</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{userInfo.user._id}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
);
}


export default PreviousOrders;