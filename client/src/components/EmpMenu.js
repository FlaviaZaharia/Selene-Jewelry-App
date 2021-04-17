import React from 'react';
import {Card, CardText, CardBody, CardDeck, Button, CardTitle} from 'reactstrap';

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
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Add new item</CardTitle>
                            <Button variant='primary'className="mbut" > Go </Button>
                        </CardBody>
                    </Card>

                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Edit item</CardTitle>
                            <Button variant='primary' className="mbut"> Go </Button>
                        </CardBody>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck className="deck">
                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Delete item</CardTitle>
                            <Button variant='primary'className="mbut" > Go </Button>
                        </CardBody>
                    </Card>

                    <Card className="cards" style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign:'center'}}> Stock management</CardTitle>
                            <Button variant='primary' className="mbut"> Go </Button>
                        </CardBody>
                    </Card>

                </CardDeck>
                <br></br>
                <br></br>
                
            </div>
            
        );
    } 
} 

