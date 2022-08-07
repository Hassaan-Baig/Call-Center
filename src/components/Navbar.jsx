import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import company_logo from  '../com_name.png'
function Naavbar() {
  return (
    <>
    <div class="NavBar">
        <Navbar style={{backgroundColor:'rgba(43, 103, 119, 0.5)'}} variant="light">
            <Container>
            <Navbar.Brand href="#home">CT Call Centre</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About CT</Nav.Link>
                <Nav.Link href="/Difference">CT Difference</Nav.Link>
                <Nav.Link href="#features">Newsroom</Nav.Link>
                <Nav.Link href="#pricing">Careers</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Naavbar;