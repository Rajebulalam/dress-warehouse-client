import React from 'react';
import './Style.css';
import { Container } from 'react-bootstrap';

const Style = () => {
    return (
        <div className='style'>
            <Container className='stylish'>
                <div className='w-100'>
                    <img src="https://i.ibb.co/5KLMSNv/style-removebg-preview.png" alt="style-img" />
                </div>
                <div className='w-100 details'>
                    <div>
                        <p><small className='fw-bold'>ASK A STYLIST</small></p>
                        <h2 className='fs-1 fw-bold'>Great Look With Our Stylist Product</h2>
                        <p>If you don't know what to wear and need some styling advice you have an opportunity to book an appointment one of our stylist.</p>
                        <input className='w-50 p-2 border-0 outline-0' type="email" name="email" id="email" placeholder='Your Email' />
                        <button className='w-25 p-2 ms-3 btn  border-0 outline-0 fw-bolder' type="submit">CONTACT US</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Style;