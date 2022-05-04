import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
    return (
        <div className='bg-dark pt-5 pb-4'>
            <Container className='text-white footer'>
                <div>
                    <h2 className='fs-5'>About Us</h2>
                    <p className='pt-3'>We are storing the best design cloths. So that people can easily attract with our product. We are providing quality oriented product for our customer.</p>
                </div>
                <div>
                    <h2 className='fs-5'>Information</h2>
                    <p className='pt-3'><a href="/">Search</a></p>
                    <p><a href="/">Store Location</a></p>
                    <p><a href="/">Order & Return</a></p>
                    <p><a href="/">Privacy Policy</a></p>
                </div>
                <div>
                    <h2 className='fs-5'>Support</h2>
                    <p className='pt-3'><a href="/">Contact Us</a></p>
                    <p><a href="/">About Us</a></p>
                    <p><a href="/">Career</a></p>
                    <p><a href="/">Delivery</a></p>
                </div>
                <div>
                    <h2 className='fs-5'>Help</h2>
                    <p className='pt-3'><a href="/">Help & FAQ's</a></p>
                    <p><a href="/">Information</a></p>
                    <p><a href="/">Shipping Details</a></p>
                    <p><a href="/">Online Payment</a></p>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder='Email Address' />
                    <button className='w-100 p-2 mb-4 outline-0 border-0 fw-bolder' type="submit">Submit</button>
                    <div className='social-icon'>
                        <a href="/">
                            <FontAwesomeIcon className='font-awesome' icon={faGithub} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon className='font-awesome' icon={faLinkedin} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon className='font-awesome' icon={faTwitter} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon className='font-awesome' icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;