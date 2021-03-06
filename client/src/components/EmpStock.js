import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ITEM} from "./ITEM"
import {useSelector,useDispatch} from 'react-redux'
import { getProducts as listProducts } from "../actions/productActions";
import {Card, CardText, CardBody, Button, CardLink,CardTitle} from 'reactstrap';
const EmpStock=({history})=> {
    
    const [items,setItems]=useState([]);
    const [error, setError] = useState("");
    const [_id, setId] = useState("");
    const [quantity, setQuantity] = useState("");

    const getItems = () => {
        axios.get('/api/items/retrieve/').then(rezultat => setItems(rezultat.data));
      }
    const filter = items.filter((item) => item.quantity<=10);
      
    useEffect(() => {
        getItems();
      },[]);

    const updateHandler=async _id =>{
        
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        try {

          const { data } = await axios.put(
            `/api/items/find/${_id}`,
            {quantity},
            config
          );
          setQuantity(data.quantity);
          history.push("/");
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
    };
      
return(
        <div className='EmpStock' >
            {filter.map(({_id,name,category,quantity})=>
            <Card  key={_id} className="cards" >
            <CardBody>
              <CardTitle tag="h5" style={{textAlign:'center'}}>{name}</CardTitle>
              <CardText style={{textAlign:'center'}}>Article ID:{_id} <br/> Category:{category} <br/> Quantity:{quantity}</CardText>
             <form onSubmit={updateHandler(_id)}>
              <div className='form-inputs'>
                <label> Required quantity: </label>
                <input 
                    type="number" required
                    id='quantity'
                    className='inputStock'
                    placeholder='enter q'
                    onChange={(e)=>setQuantity(e.target.value)}
                     /></div>
                <div className="submitButton">
                  <Button className="mbut" > Refill </Button>
                </div>
                </form>
              </CardBody>
            </Card>
            )}
      
        </div> )   
}

export default EmpStock;

