import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container className="justify-content-center"> {/* Alignement centré */}
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          JOHN DOE
        </Navbar.Brand>

        {/* Burger Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Centre le menu */}
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects">Réalisations</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Me contacter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
