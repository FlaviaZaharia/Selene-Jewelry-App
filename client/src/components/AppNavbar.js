import React, {Component} from 'react';
import{
    Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import {Link} from 'react-router-dom';
class AppNavbar extends Component {
    
    state = {
            isOpen: false 
        }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div className="navigation">
            <Navbar  light expand="sm" className="navbar">
                <Container>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav  navbar>
                        <Link to='/'>
                        <NavItem className="navigation">Home Page</NavItem>
                        </Link>
                        <Link to='/jewelry'>
                        <NavItem className="navigation" >Jewelry</NavItem>
                        </Link>
                        <Link to='/watches'>
                        <NavItem className="navigation">Watches</NavItem>
                        </Link>
                        <Link to='/aboutus'>
                        <NavItem className="navigation">About Us</NavItem>
                        </Link>
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        </div> );
    }
}



export default AppNavbar;