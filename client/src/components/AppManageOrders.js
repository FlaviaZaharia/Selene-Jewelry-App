import { Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect,useState} from 'react'
import axios from 'axios';
const ManageOrders=()=>{

      const [orders,setOrders]=useState([]);
      const [status,setStatus]=useState();
      const [id,setId]=useState();
      const getOrders = () => {
        axios.get('/api/order/get').then(rezultat => {setOrders(rezultat.data);console.log(rezultat.data)});
      }
      useEffect(() => {
        getOrders();
      },[]);
      //const Status=[{val:"Shipped"},{val:"Canceled"}]
      /*const handleSave=(id,status)=>{
          axios.put(`/api/order/update/${id}`,{status})
      }*/
return(
    <Table striped>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Products</th>
          <th>Payment</th>
          <th>Shipping</th>
          <th>Subtotal</th>
          <th>Transport</th>
          <th>Total</th>
          <th>Order Status</th>
          <th>Save status</th>
        </tr>
      </thead>
      <tbody>
          {orders.map((order, index)=>(
               <tr key={order._id+index}>
               <td>{order._id}</td>
               <td>{order.email}</td>
               <td>{order.name}</td>
               <td>{order.number}</td>
               <td>{order.address}</td>
               <td>{order.city}</td>
               <td>{order.country}</td>
               <td>{order.products.map((item)=>(<div><p><b>Item ID</b><br/>{item._id}</p><p><b>Item name</b><br/>{item.name}</p><p><b>Category</b><br/>{item.category}</p><p><b>Qantity</b><br/>{item.qty}<hr></hr></p></div>))}</td>
               <td>{order.payment}</td>
               <td>{order.shipping}</td>
               <td>{order.total}</td>
               <td>{order.transport}</td>
               <td>{order.total+order.transport}</td>
             </tr>
          ))}
      </tbody>
    </Table>
    
    );
}
export default ManageOrders;