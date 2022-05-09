import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Container className='py-5 notFound text-center'>
                <h1>Opps!</h1>
                <h2 className='text-danger fs-1 fw-bold py-1'>404</h2>
                <h2 className='p-0'>PAGE NOT FOUND</h2>
                <p className='fw-bold'>The page you are looking for might have been removed</p>
                <Link className='px-4 py-2 mt-2 fw-bold rounded' to='/'>Take Me Home</Link>
            </Container>
        </div>
    );
};

export default NotFound;