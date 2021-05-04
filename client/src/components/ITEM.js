import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
export const ITEM=({image,price,name,_id,material})=>{
    return( <Card  key={_id} className="cards">
    <CardBody>
      <CardTitle tag="h5" style={{textAlign:'center'}}><Link to={`details/${_id}`}>{name}</Link></CardTitle>
    </CardBody>
    <CardImg  width='100%' height='50%' src={image} alt="Card image cap" />
    <CardBody>
      <CardText style={{textAlign:'center'}}>Article ID:{_id} <br/> Material:{material} <br/>Price:{price} </CardText>

    </CardBody>
  </Card>);
}


//export default ITEM;