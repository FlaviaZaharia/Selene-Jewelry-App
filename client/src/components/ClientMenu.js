import React from 'react';
import {Card, CardText, CardBody, CardDeck, Button, CardTitle} from 'reactstrap';

export default class ClientMenu extends React.Component {
    
    render() {
       
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
                            <Button variant='primary' className="mbut" > here </Button>
                        </CardBody>
                    </Card>
                
                <br></br>
                <br></br>
                
        </div> );}}

