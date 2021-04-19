import React from 'react';
import { Card, CardText, CardBody, CardDeck, Button, CardTitle } from 'reactstrap';
import { handleLogout } from './AppPrivateRoute';
import { Link } from 'react-router-dom';
export default class EmpMenu extends React.Component {

    render() {

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
                            <Button variant='primary' className="mbut"> Go </Button>
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
}

