import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

const Header = () => {
   
    return (
    <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/bookcase">Bookcase</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    <h1>My Bookcase</h1>
    </div>
    );
};

export default Header;