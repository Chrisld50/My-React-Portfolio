import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
export default function Navigationbar() {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        Weird Music 
      
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}





