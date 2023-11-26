import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 px-2">
    <Link className='brand' to="/">The Food Place</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className='home' to="/">HOME</Link>
          <Link className='about' to="/about">ABOUT</Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header