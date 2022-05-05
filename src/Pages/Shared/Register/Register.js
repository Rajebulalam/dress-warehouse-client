import React from 'react';
import { Container } from 'react-bootstrap';
import './Register.css';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import facebookIcon from '../../../images/facebook.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='py-5 register'>
            <Container>
                <form className='form p-5 shadow'>
                    <h2 className='text-center fw-bold'>Create Account</h2>
                    <div>
                        <input className='mb-3 p-2 rounded' type="text" name="name" id="name" placeholder='Name' />
                        <input className='mb-3 p-2 rounded' type="email" name="email" id="email" placeholder='Email' />
                        <input className='mb-3 p-2 rounded' type="password" name="password" id="password" placeholder='Password' />
                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label htmlFor="checkbox"> I agree to the <span className='color'>Terms</span> and <span className='color'>Privacy Policy</span> </label>
                        </div>
                        <div className='w-100 btn'>
                            <button className='rounded signUp-btn' type="submit">Sign Up</button>
                            <button className='rounded login-btn' type="submit"><Link to='/login'>Sign In</Link></button>
                        </div>
                        <div className='or pt-2'>
                            <span></span>
                            <p className='px-2'>or</p>
                            <span></span>
                        </div>
                        <div className='social-icon'>
                            <button><img src={googleIcon} alt="google-icon" /></button>
                            <button><img src={githubIcon} alt="github-icon" /></button>
                            <button><img src={facebookIcon} alt="facebook-icon" /></button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Register;