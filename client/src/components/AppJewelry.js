import {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';

const  AppJewerly=()=>{
    
    const [items,setItems]=useState([]);
  
    const getItems = () => {
      axios.get('/api/items/retrieve/').then(rezultat => setItems(rezultat.data));
    }
    //const filterBraclets = items.filter((item) => item.material === 'silver');
    //console.log(filterBraclets);
    useEffect(() => {
      getItems();
    },[]);

    
        return(
            <div className='AppJewelry'>

<Nav className='jewel_navbar' >
    <NavItem>
      <NavLink className='jewel_nav' href="/allproducts" >All products</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className='jewel_nav' /*onClick={filterBraclets}*/ href="/bracelets" >Bracelets</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className='jewel_nav' href="/rings">Rings</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className='jewel_nav' href="/earrings">Earrings</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className='jewel_nav' href="/necklaces">Necklaces</NavLink>
    </NavItem>
    
  </Nav>
  {items.map(({_id,name,material,price,image})=>
              <Card  key={_id} className="cards">
              <CardBody>
                <CardTitle tag="h5" style={{textAlign:'center'}}>{name}</CardTitle>
              </CardBody>
              <CardImg  width='100%' height='50%' src={image} alt="Card image cap" />
              <CardBody>
                <CardText style={{textAlign:'center'}}>Article ID:{_id} <br/> Material:{material} <br/>Price:{price}</CardText>
                <CardLink className='Links' href="#">Add to Wish List</CardLink>
                <CardLink  className='Links' href="#">Add to Cart</CardLink>
              </CardBody>
            </Card>
              )}
  

            </div>
        );
    
        
}
export default AppJewerly;

