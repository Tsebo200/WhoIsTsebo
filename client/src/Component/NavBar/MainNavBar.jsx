import React from 'react';
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

function MainNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/" >Investec</Navbar.Brand>
        <Nav className="me-auto">
            <Link href="/">Landing</Link>
            <Link href="/maps">Maps</Link>
        </Nav>
    </Container>
  </Navbar>
  )  
}

export default MainNavBar