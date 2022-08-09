import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import company_logo from  '../com_name.png'
import { Link } from 'react-router-dom';
function Naavbar() {
  return (
    <>
    <div class="NavBar">
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">
            <Link to="/" style={{ textDecoration: 'none', color:'black' }}>CT Call Centre</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link >
                <Link to="/" style={{ textDecoration: 'none', color:'black' }}>Home</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/About" style={{ textDecoration: 'none', color:'black' }}> About CT</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to="/Difference" style={{ textDecoration: 'none', color:'black' }}> CT Difference</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                <Link to="#features" style={{ textDecoration: 'none', color:'black' }}> Newsroom</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                <Link to="#features" style={{ textDecoration: 'none', color:'black' }}>Careers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact" style={{ textDecoration: 'none', color:'black' }}>Contact Us</Link>
                </Nav.Link>

            </Nav>
            </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Naavbar;