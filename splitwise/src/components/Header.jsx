import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Splitwise</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto'>
                            <LinkContainer to="/contacts">
                                <Nav.Link><i className="fas fa-users" style={{marginRight:"10px"}}></i>Contacts</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="ml-auto">
                            <LinkContainer to='/creategroup'>
                                <Nav.Link><i className="fas fa-plus" style={{marginRight:"10px"}}></i>Create Group</Nav.Link>
                            </LinkContainer>
                        </Nav>

                        
                        <Nav className="ml-auto">
                        <Nav.Link>Account</Nav.Link>
                        <NavDropdown id="username">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item>
                                Rate Splitwise
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Contact Splitwise support
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
