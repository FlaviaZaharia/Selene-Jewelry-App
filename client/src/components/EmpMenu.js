import React from 'react';
import { Card, CardText, CardBody, CardDeck, Button, CardTitle } from 'reactstrap';
import { handleLogout } from './AppPrivateRoute';
import { Link ,useHistory} from 'react-router-dom';
import {logout} from '../actions/authActions'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'

const  EmpMenu=({history})=>{
    
    const dispatch = useDispatch();
    const state = useSelector(state => {
        return state.userLogin;
      });
    const { userInfo, loading, error } = state;

        const handleLogout=async(e)=>{
            //e.preventDefault();
            history.push("/login");
            dispatch(logout());
            
        };
        return (
            <div className='menu'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <CardDeck className="deck">

                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{ textAlign: 'center' }}> Add new item</CardTitle>
                            <Link to="/add">
                                <Button variant='primary' className="mbut" > Go </Button>
                            </Link>
                        </CardBody>
                    </Card>

                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{ textAlign: 'center' }}> Edit item</CardTitle>
                            <Link to="/edit">
                                <Button variant='primary' className="mbut"> Go </Button>
                            </Link>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck className="deck">
                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{ textAlign: 'center' }}> Delete item</CardTitle>
                            <Link to="/delete">
                                <Button variant='primary' className="mbut" > Go </Button>
                            </Link>
                        </CardBody>
                    </Card>

                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{ textAlign: 'center' }}> Stock management</CardTitle>
                            <Link to="/stock">
                            <Button variant='primary' className="mbut"> Go </Button>
                            </Link>
                        </CardBody>
                    </Card>

                </CardDeck>
                <div className="logout">
                    <button className="outM" onClick={handleLogout}>Logout</button>
                 </div>
                <br></br>
                <br></br>

            </div>

        );
    
}
export default EmpMenu;

