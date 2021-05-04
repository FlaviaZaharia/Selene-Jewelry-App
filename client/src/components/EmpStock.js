import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Card, CardText, CardBody, Button, CardLink,CardTitle} from 'reactstrap';
const EmpStock=({history})=> {
    
    const [items,setItems]=useState([]);
    const [error, setError] = useState("");
    const [_id, setId] = useState("");
    const [quantity, setQuantity] = useState("");

    const getItems = () => {
        axios.get('/api/items/retrieve/').then(rezultat => setItems(rezultat.data));
      }
    const filter = items.filter((item) => item.quantity<20);
      
    useEffect(() => {
        getItems();
      },[]);

    const updateHandler=async(e) =>{
        e.preventDefault();

        /*this.setState ({
            showMe:false
        }); */
       
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
              </CardBody>
             
              <CardBody>
                <CardText style={{textAlign:'center'}}>Article ID:{_id} <br/> Category:{category} <br/> Quantity:{quantity}</CardText>
                {/*<CardLink className='Links' href="#">Add to Wish List</CardLink>
                <CardLink  className='Links' href="#">Add to Cart</CardLink>*/}
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
                  <Button className="mbut" onClick={updateHandler}> Refill </Button>
                </div>
              </CardBody>
            </Card>
              )}
        </div> )   
}

export default EmpStock;

