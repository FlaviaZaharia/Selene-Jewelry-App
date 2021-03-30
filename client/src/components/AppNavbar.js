import React, {Component} from 'react';
import{
    Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

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
                        <Nav className="w-100" navbar>
                        <NavItem >
                                <NavLink href="#">Homepage</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#">Jewelry</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Watches</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Gift Boxes</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#">About Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        </div> );
    }
}

export default AppNavbar;