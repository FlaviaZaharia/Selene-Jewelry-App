import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import {Card, CardText, CardBody, CardLink,CardTitle, CardImg,Nav, NavItem, NavLink} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import { getProducts as listProducts } from "../actions/productActions";
import {Link} from 'react-router-dom'
import {ITEMST} from "./ITEMST";
import { Button, ButtonGroup } from 'reactstrap';


const AppStock=({history}) => {
    const [items,setItems]=useState([]);
   // const [error, setError] = useState("");
    //const [_id, setId] = useState("");
    //const [quantity, setQuantity] = useState("");
    const dispatch = useDispatch();
  const [types,setTypes]=useState(null);
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const filter=products.filter((product)=>product.quantity===0);

  /*const updateHandler=(_id)=>{
       // e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
     /* const { data } =  axios.put(
        `/api/items/find/${_id}`,
        {quantity},
        config
      ); 
      //setQuantity(data.quantity);
     // history.push("/"); 
}; */
  return (
    <div className='EmpStock' >
    {filter.map((product)=>
    <ITEMST
    id={product._id}
    name={product.name}
    image={product.image}
    q={product.quantity}
    category={product.category}
    //setQuantity={setQuantity}
    //updateHandler={updateHandler}
    ></ITEMST>
     )}
    </div>
  )
}
export default AppStock;