import axios from 'axios';
import { Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useState,useEffect} from 'react';
const PreviousOrders=({history})=>{
    const state = useSelector(state => {
        return state.userLogin;
      });
      const { loading, userInfo } = state;
      const [orders,setOrders]=useState([]);
      const [error,setError]=useState();
      const uid=userInfo.user._id;
     const getItems = ()=> {
      axios.get('/api/order/get').then(rezultat => setOrders(rezultat.data));
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
          <th>Address,City,Country</th>
          <th>Products</th>
          <th>Payment</th>
          <th>Shipping</th>
          <th>Subtotal</th>
          <th>Transport</th>
          <th>Total</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.filter((orders)=>orders.userId===uid).map((order)=>(<tr>
          <td>{order._id}</td>
          <td>{order.name}</td>
          <td>{order.number}</td>
          <td>{order.address},{order.city},{order.country}</td>
          <td>{order.products.map((item)=>(<div><p><b>Item ID</b><br/>{item._id}</p><p><b>Item name</b><br/>{item.name}</p><p><b>Category</b><br/>{item.category}</p><p><b>Qantity</b><br/>{item.qty}<hr></hr></p></div>))}</td>
               <td>{order.payment}</td>
               <td>{order.shipping}</td>
               <td>{order.total}</td>
               <td>{order.transport}</td>
               <td>{order.total+order.transport}</td>
               <td>{order.status}</td>
        </tr>))}
        
    
      </tbody>
    </Table>
);
}


export default PreviousOrders;