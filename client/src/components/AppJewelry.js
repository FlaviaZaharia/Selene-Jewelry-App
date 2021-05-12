import {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import { getProducts as listProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import {Link} from 'react-router-dom'
import {ITEM} from "./ITEM";
import { Button, ButtonGroup } from 'reactstrap';
const  AppJewerly=(props)=>{
  
  const dispatch = useDispatch();
  const [types,setTypes]=useState(null);
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
<div className='text-center' >
  <ButtonGroup>
        <Button color="light" onClick={() => setTypes("")} active={types === ""}>All products</Button>
        <Button color="light" onClick={() => setTypes("Rings")} active={types === "Rings"}>Rings</Button>
        <Button color="light" onClick={() => setTypes("Earrings")} active={types === "Earrings"}>Earrings</Button>
        <Button color="light" onClick={() => setTypes("Necklaces")} active={types === "Necklaces"}>Necklaces</Button>
        <Button color="light" onClick={() => setTypes("Bracelets")} active={types === "Bracelets"}>Bracelets</Button>
      </ButtonGroup>
      </div>


      {types==="Rings"?(products.filter((product)=>product.category==="Rings").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>)):(types==="Earrings"?(products.filter((product)=>product.category==="Earrings").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>)):(types==="Necklaces"?(products.filter((product)=>product.category==="Necklaces").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>)):(types==="Bracelets"?(products.filter((product)=>product.category==="Bracelets").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>)):(types===""?(products.filter((product)=>product.category!=="Watches").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>)):(products.filter((product)=>product.category!=="Watches").map((product)=><ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>))))))}
            </div>
        );
    
        
}
export default AppJewerly;
/*products.map((product)=>
              <ITEM
              key={product._id}
              name={product.name}
              material={product.material}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category={product.category}
              _id={product._id}/>
              )}*/ 
