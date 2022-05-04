import React from 'react';
import { Container } from 'react-bootstrap';

const BestSupply = () => {
    return (
        <div className='pt-2 pb-5'>
            <h2 className='text-center pb-3 fs-5'>BEST SUPPLY</h2>
            <Container className='arrival'>
                <div>
                    <img src="https://i.ibb.co/sHwFskX/9-400x533.jpg" alt="dress-img" />
                    <p>White Dress</p>
                    <h4> Supply : 35</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/pXhDvhj/10-400x533.jpg" alt="dress-img" />
                    <p>Summer Dress</p>
                    <h4>Supply : 55</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/dKdz8HF/12-400x533.jpg" alt="dress-img" />
                    <p>Thin Dress</p>
                    <h4>Supply : 35</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/r7rjns8/2-400x533.jpg" alt="dress-img" />
                    <p>Jacket & Dress</p>
                    <h4>Supply : 79</h4>
                </div>
            </Container>
        </div>
    );
};

export default BestSupply;