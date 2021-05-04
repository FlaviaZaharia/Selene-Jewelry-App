import {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import { getProducts as listProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import {Link} from 'react-router-dom'
import {ITEM} from "./ITEM"
const  AppJewerly=()=>{
  
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  
   /* const [items,setItems]=useState([]);
  
    const getItems = () => {
      axios.get('/api/items/retrieve/').then(rezultat => setItems(rezultat.data));
    }
    //const filterBraclets = items.filter((item) => item.material === 'silver');
    //console.log(filterBraclets);
    useEffect(() => {
      getItems();
    },[]);*/

    
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
  {products.map((product)=>
              <ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>
              )}
  

            </div>
        );
    
        
}
export default AppJewerly;

