import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
export const ITEM=({image,price,name,_id,material,category,quantity})=>{
    return( <Card  key={_id} className="cards">
    <CardBody>
      <CardTitle tag="h5" style={{textAlign:'center'}}>{category}</CardTitle>
    </CardBody>
    <CardImg  width='300px' height='300px' src={image} alt="Card image cap" />
    <CardBody>
      <CardText style={{textAlign:'center'}}>{quantity<=0?(<p>{name}</p>):(<Link to={`details/${_id}`}>{name}</Link>)}</CardText>
      <CardText style={{textAlign:'center'}}>{quantity>0?(<span style={{color:"#006400"}}><b>In Stock</b></span>):(<span style={{color:"red"}}><b>Out of Stock</b></span>)}<br/>Price:{price} $ </CardText>

    </CardBody>
  </Card>);
}


//export default ITEM;