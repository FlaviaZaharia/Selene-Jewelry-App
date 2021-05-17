import { Button, ButtonGroup } from 'reactstrap';
import { useState} from 'react';
import axios from 'axios';
export const OrderLayout=({id,email,name,number,address,city,country,payment,shipping,products,total,transport,statusOrd,index},props)=>{
    const [status,setStatus]=useState("Pending");
    const [done,setDone]=useState(false);
    const handleSave=()=>{
        
        axios.put(`/api/order/update/${id}`,{status});
       
        setDone(true);
    }
    return(
    <tr key={id+index}>
    <td>{id}</td>
    <td>{email}</td>
    <td>{name}</td>
    <td>{number}</td>
    <td>{address}</td>
    <td>{city}</td>
    <td>{country}</td>
    <td>{products.map((item)=>(<div><p><b>Item ID</b><br/>{item._id}</p><p><b>Item name</b><br/>{item.name}</p><p><b>Category</b><br/>{item.category}</p><p><b>Quantity</b><br/>{item.qty}<hr></hr></p></div>))}</td>
    <td>{payment}</td>
    <td>{shipping}</td>
    <td>{total}</td>
    <td>{transport}</td>
    <td>{total+transport}</td>
    
    
   {/* {statusOrd==="Canceled"||statusOrd==="Shipped"?(<td>{statusOrd}</td>):(status==="Pending"?(<ButtonGroup >
        <Button className="payment" onClick={() => setStatus("Shipped")} active={status === "Shipped"}>Shipped</Button>
        <Button className="payment" onClick={() => setStatus("Canceled")} active={status === "Canceled"}>Cancelled</Button>
      </ButtonGroup>):(<td>{status}</td>))}
    {statusOrd==="Canceled"||statusOrd==="Shipped"?(<td>Finished</td>):(show===true?(<td><button onClick={handleSave}>Save</button></td>):(<td>Finished</td>))}   */}
     
    {statusOrd==="Canceled"||statusOrd==="Shipped"?(<><td>{statusOrd}</td><td>Finished</td></>):(done===true?(<><td>{status}</td><td>Finished</td></>):(<><ButtonGroup >
        <Button className="payment" onClick={() => setStatus("Shipped")} active={status === "Shipped"}>Shipped</Button>
        <Button className="payment" onClick={() => setStatus("Canceled")} active={status === "Canceled"}>Cancelled</Button>
      </ButtonGroup><td><button onClick={handleSave}>Save</button></td></>))}

    </tr>);

}

