import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='background'>
            <div className='size'>
                <Carousel>
                    <Carousel.Item>
                        <div className='slider'>
                            <div className='w-100'>
                                <h2>Exception for Everyone with Unique Style</h2>
                                <p>Dress Sense makes man perfect</p>
                                <button className='btn text-white'>Buy Now</button>
                            </div>
                            <div className='w-100'>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/mq9YsxV/men-with-suit-removebg-preview.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider'>
                            <div className='w-100'>
                                <h2>Experience The Brilliance of a Real Gem</h2>
                                <p>Fashion is a man soul</p>
                                <button className='btn text-white'>Buy Now</button>
                            </div>
                            <div className='w-100'>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/cT2f14S/1-3-removebg-preview.png"
                                    alt="Second slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider'>
                            <div className='w-100'>
                                <h2>Choice is your's!</h2>
                                <p>Product is Our's</p>
                                <button className='btn text-white'>Order Now</button>
                            </div>
                            <div className='w-100'>
                                <img
                                    className="d-block w-100 third"
                                    src="https://i.ibb.co/QrvC8MV/pexels-dom-removebg-preview.png"
                                    alt="Second slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;