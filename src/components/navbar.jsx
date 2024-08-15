import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
<Navbar bg="dark" variant="dark" expand="lg" className="navbar">
    <Navbar.Brand as={Link} to="/" className="navbar-brand">Play Ground</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/dashboard" className="nav-link">
                Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="nav-link">
                Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/tasks" className="nav-link">
                Tasks
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="nav-link">
                Login
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default NavigationBar;