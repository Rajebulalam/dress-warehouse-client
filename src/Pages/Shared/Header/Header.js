import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='py-3' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-3' as={Link} to='/'> <span className='fs-1 text-warning'>D</span>ress <span className='fs-1 text-warning'>W</span>arehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu-item">
                        <Nav.Link className='text-white mx-2' as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className='register text-dark px-3 btn mx-2' href="#link">Register</Nav.Link>
                        <Nav.Link className='login text-dark ms-2 px-4 btn' href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;