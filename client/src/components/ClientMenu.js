import React from 'react';
import {Card, CardText, CardBody, CardDeck, Button, CardTitle} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../actions/authActions'
import {Link} from 'react-router-dom'
import {clearCart} from '../actions/cartActions'
const ClientMenu=({history})=>{
    const dispatch = useDispatch();
    const state = useSelector(state => {
        return state.userLogin;
      });
    const { userInfo, loading, error } = state;

        const handleLogout=async(e)=>{
            //e.preventDefault();
            history.push("/login");
            dispatch(logout());
            dispatch(clearCart());
            
        };
   
       
        return (
            <div className='menu'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                

                    <Card className="cardss" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Personal data </CardTitle>
                            <Button variant='primary' className="mbut" > here </Button>
                        </CardBody>
                    </Card>
                    <br></br>
                    <Card className="cardss" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Previous orders </CardTitle>
                            <Link to="/orders">
                                <Button variant='primary' className="mbut" > here </Button>
                            </Link>
                        </CardBody>
                    </Card>
                
                <br></br>
                <br></br>
                <div className="logout">
                    <button className="outM" onClick={handleLogout}>Logout</button>
                 </div>
        </div> );}

export default ClientMenu;

