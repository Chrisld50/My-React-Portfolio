import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import '../styling/Navbar.css';

export default function Navigationbar() {
    
    return (
        <div>
          <Navbar>
            <Nav className={"mx-auto"}>
              <Nav.Link className={"navbar1 text-light hover-zoom hover-overlay"} href="/">Home</Nav.Link>
              <Nav.Link className={"navbar2 text-light"}  href="/aboutme">About Me</Nav.Link>
              <Nav.Link className={"navbar3 text-light"} href="/contact">Contact</Nav.Link>
              <Nav.Link className={"navbar4 text-light"} href="https://docs.google.com/document/d/1i7YMFd_SLYgDZsmjsqvHGy8lhFztWt6ZG-dV-v69124/edit" target="_blank" >Resume</Nav.Link>
           </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="">
            </Nav.Link>
          </Nav>
      </Navbar>
      </div>
    )
}





