import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const logOut = async () => {
        await signOut(auth);
    };

    return (
        <Navbar className='py-2' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-3' as={Link} to='/'> <span className='fs-1 text-warning'>D</span>ress <span className='fs-1 text-warning'>W</span>arehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu-item">
                        <Nav.Link className='text-white mx-2' as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className='text-white mx-2' as={Link} to='/manageInventory'>Manage Items</Nav.Link>
                        <Nav.Link className='text-white mx-2' as={Link} to='/addNewItem'>Add Items</Nav.Link>
                        <Nav.Link className='text-white mx-2' as={Link} to='/myItem'>My Items</Nav.Link>
                        <Nav.Link className='register text-dark px-3 btn' as={Link} to='/register' >Register</Nav.Link>
                        {
                            user ? <Nav.Link onClick={logOut} className='login text-dark px-4 btn' as={Link} to='/login'>Log Out</Nav.Link> : <Nav.Link className='login text-dark px-4 btn' as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;