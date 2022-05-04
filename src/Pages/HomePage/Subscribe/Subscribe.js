import React from 'react';
import { Container } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='py-5'>
            <Container>
                <div className='subscribe rounded py-4'>
                    <h2 className='text-center pb-3'>Subscribe To Our News!</h2>
                    <div className='text-center'>
                        <input className='border-0 p-2' type="email" name="email" id="email" placeholder='Your Email' />
                        <button type="submit" className='btn border-0 p-2  ms-3'>SUBSCRIBE</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Subscribe;