import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
class AppAboutUs extends React.Component{

    render(){
        return(
            <div>
                <br></br>
                <Container>
                    <Row>
                        <Col className="about">
                            <h1 > Contact </h1>
                            <br></br>
                            Direct: 
                            <br></br>
                            2222-222-222
                            <br></br>
                            <br></br>

                            E-mail:
                            <br></br>
                            info@selene.com
                        </Col>
                        <Col className="about">
                            <h1> Social Media</h1>
                            <br></br>
                            
                            <IconButton className="fb">
                                <FacebookIcon></FacebookIcon>
                            </IconButton>
                            <br></br>
                            <IconButton className="insta">
                                <InstagramIcon></InstagramIcon>
                            </IconButton>
                        </Col>
                        <Col className="about">
                            <h1> Hours </h1>
                            <br></br>
                            Monday - Thursday
                            <br></br>
                            10AM - 4PM
                            <br></br> 
                            Friday - Saturday
                            <br></br>
                            11AM - 2PM
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col className="about">
                        <p> &copy; 2021 Selene Jewelry</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
        
}
export default AppAboutUs;