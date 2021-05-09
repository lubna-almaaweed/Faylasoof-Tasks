import React from 'react'
import{LinkContainer}from 'react-router-bootstrap'
import {Nav,Navbar} from 'react-bootstrap';

 function Header(){
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Notes App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/notes">        
                        <Nav.Link>Notes</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}
export default Header;
