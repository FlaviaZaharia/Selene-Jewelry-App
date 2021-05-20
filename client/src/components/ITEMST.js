import {Card, Button, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';

export const ITEMST=({image,name,id,category,q})=>{
    const [quantity,setQuantity] = useState(q);
    const updateHandler = async () => {
      await axios.put( `api/items/find/${id}`,{quantity});
    }
    return( <Card  key={id} className="cards" >
    <CardBody>
      <CardTitle tag="h5" style={{textAlign:'center'}}>{name}</CardTitle>
      <CardImg  width='300px' height='300px' src={image} alt="Card image cap" />
      <CardText style={{textAlign:'center'}}>Article ID:{id} <br/> 
      Category:{category} <br/>
      Quantity:{q} <br/> </CardText>
     <form 
         onSubmit={updateHandler}
         >
      <div className='form-inputs'>
        <label> Required quantity: </label>
        <input 
            type="number" required
            id='quantity'
            className='inputStock'
            placeholder='Enter quantity'
            //value={q}
            onChange={(e)=>setQuantity(e.target.value)}
             /></div>
        <div className="submitButton">
          <Button className="mbut" > Refill </Button>
        </div>
     </form> 
     {/*<div className="submitButton" onClick={updateHandler(_id)}>
          <Button className="mbut" > Refill </Button>
</div> */}
      </CardBody>
    </Card>);
}