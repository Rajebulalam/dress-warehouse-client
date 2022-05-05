import React from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import facebookIcon from '../../../images/facebook.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='py-5 register'>
            <Container>
                <form className='form shadow'>
                    <h2 className='text-center fw-bold'>Login</h2>
                    <div>
                        <input className='mb-3 p-2 rounded' type="email" name="email" id="email" placeholder='Email' />
                        <input className='mb-3 p-2 rounded' type="password" name="password" id="password" placeholder='Password' />
                        <div className='w-100 btn p-0'>
                            <button className='rounded login-btn w-100' type="submit">Login</button>
                        </div>
                        <div className='forget-pass pt-4'>
                            <p><Link to='/register'>Create Account?</Link></p>
                            <p>Forget Password?</p>
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

export default Login;