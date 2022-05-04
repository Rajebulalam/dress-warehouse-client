import React from 'react';
import { Container } from 'react-bootstrap';
import './NewArrivals.css';

const NewArrivals = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center pb-3 fs-5'>NEW ARRIVALS</h2>
            <Container className='arrival'>
                <div>
                    <img src="https://i.ibb.co/jRxqsX7/5-400x533.jpg" alt="arrival-img" />
                    <p>Minty Dress</p>
                    <h4>Quantity : 50</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/TmRNcjG/6-400x533.jpg" alt="arrival-img" />
                    <p>Variable Product</p>
                    <h4>Quantity : 50</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/Mnz0qHC/7-400x533.jpg" alt="arrival-img" />
                    <p>Pink Dress</p>
                    <h4>Quantity : 50</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/L8ppjSB/8-400x533.jpg" alt="arrival-img" />
                    <p>Gray Dress</p>
                    <h4>Quantity : 50</h4>
                </div>
            </Container>
        </div>
    );
};

export default NewArrivals;