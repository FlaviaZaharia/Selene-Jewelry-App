import React from 'react';
import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
class AppJewerly extends React.Component{
     state={
       items:[
         {id:1,name:'Aura Ring',material:'Silver',price:200,image:"https://www.lancejames.co.uk/images/engagement-rings-by-lance-james-cushion-halo-diamond-engagement-ring-in-platinum-p4077-7823_image.jpg"},
         {id:2,name:'Cleopatra Ring',material:'Gold',price:150,image:"https://30d01f9adcdd9ca8bb29-e7821b1789d66a252f67999ba68e5823.ssl.cf2.rackcdn.com/open-leaf-engagement-ring-in-18K-rose-gold-FD8342-NL-RG-GS.jpg"},
         {id:3,name:'Nora Ring',material:'Silver',price:100,image:"https://www.berrysjewellers.co.uk/images/brown-newirth-unity-platinum-and-18ct-rose-gold-wedding-ring-p17774-30694_image.jpg"},
         {id:4,name:'Venus Ring',material:'Silver',price:80,image:"https://www.annoushka.com/dw/image/v2/BCRG_PRD/on/demandware.static/-/Sites-annoushka-master-catalog/default/dwdc8193a4/images/main/Crown_18ct_Gold_Diamond_Ring.jpg"},
         {id:5,name:'Jupiter Ring',material:'Gold',price:300,image:"https://b34959663f5a3997bd0d-2668915a1d3a077262c88fab6aa0aa02.ssl.cf3.rackcdn.com/08210561_1_640.jpg"}
       ]
     }
    render(){
      const{items}=this.state;
        return(
            <div className='AppJewelry'>
        <Nav className='jewel_navbar'>
        <NavItem>
          <NavLink className='jewel_nav' href="#">All products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='jewel_nav'  href="#">Bracelets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='jewel_nav' href="#">Rings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='jewel_nav' href="#">Earrings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='jewel_nav' href="#">Necklaces</NavLink>
        </NavItem>
        
      </Nav>
              {items.map(({id,name,material,price,image})=>
              <Card  key={id} className="cards">
              <CardBody>
                <CardTitle tag="h5" style={{textAlign:'center'}}>{name}</CardTitle>
              </CardBody>
              <CardImg  width='100%'  src={image} alt="Card image cap" />
              <CardBody>
                <CardText style={{textAlign:'center'}}>Article ID:{id} <br/> Material:{material} <br/>Price:{price}</CardText>
                <CardLink className='Links' href="#">Add to Wish List</CardLink>
                <CardLink  className='Links' href="#">Add to Cart</CardLink>
              </CardBody>
            </Card>
              )}

            </div>
        );
    }
        
}
export default AppJewerly;