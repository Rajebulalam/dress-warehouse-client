import React from 'react';
import './Spinner.css';
import { Container, Spinner } from 'react-bootstrap';

const spinner = () => {
    return (
        <div>
            <Container className='text-center spinner'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        </div>
    );
};

export default spinner;