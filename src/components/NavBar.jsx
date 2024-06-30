import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export class NavBar extends Component {

  render() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#home">News Monkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" active={true}>Home</Nav.Link>
                <Nav.Link href="/">About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}

export default NavBar
