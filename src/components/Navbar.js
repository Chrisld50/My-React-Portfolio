import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

export default function Navigationbar() {
    
    return (
        <div>
          <Navbar>
            <Nav className={"mx-auto"}>
              <Nav.Link className={"text-light"} href="/">Home</Nav.Link>
              <Nav.Link className={"text-light"}  href="/aboutme">About Me</Nav.Link>
              <Nav.Link className={"text-light"} href="/contact">Contact</Nav.Link>
           </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="">
            </Nav.Link>
          </Nav>
      </Navbar>
      </div>
    )
}





