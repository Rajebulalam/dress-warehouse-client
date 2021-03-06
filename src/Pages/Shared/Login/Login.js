import React, { useEffect, useState } from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import facebookIcon from '../../../images/facebook.png';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    // Set Input Value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    // React Firebase Hooks
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // To Get User from Firebase
    const [user] = useAuthState(auth);

    // Navigate
    const navigate = useNavigate();

    // Get Input Value
    const handleEmail = event => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword = event => {
        const password = event.target.value;
        setPassword(password);
    }

    // Location
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should contain at lest 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum 8 digit!');
            return;
        } else {
            await signInWithEmailAndPassword(email, password);
            const { data } = await axios.post('https://sleepy-falls-35762.herokuapp.com/login', { email });
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
            toast('Login Success full');
            event.target.reset();
        }
    }

    // If user has than you can use Protected Route
    useEffect(() => {
        if (user) {
            // navigate(from, { replace: true });
        }
    }, [user]);

    // Google Sign In Method
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const googleSignIn = async () => {
        await signInWithGoogle(email);
    }

    // Sign in With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    // Reset Password With Email
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const passwordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Send');
        } else {
            toast('Put An Email Please!');
        }
    }

    return (
        <div className='py-5 register'>
            <Helmet>
                <title>Dress Warehouse - Login</title>
            </Helmet>
            <Container>
                <form onSubmit={handleSubmit} className='form shadow'>
                    <h2 className='text-center fw-bold'>Login</h2>
                    <div>
                        <input onBlur={handleEmail} className='mb-3 p-2 rounded' type="email" name="email" id="email" placeholder='Email' />
                        <input onBlur={handlePassword} className='mb-3 p-2 rounded' type="password" name="password" id="password" placeholder='Password' />
                        <div>
                            <p> {loading && 'Loading ...'} </p>
                            <p> {err} </p>
                            <p className='text-danger'> {error?.message && "Password Does't Match"} </p>
                            <p> {sending?.message && 'Sending Email ....'} </p>
                        </div>
                        <div className='w-100 btn p-0'>
                            <button className='rounded login-btn w-100' type="submit">Login</button>
                        </div>
                        <div className='forget-pass pt-4'>
                            <p><Link to='/register'>Create Account?</Link></p>
                            <p className='cursor' onClick={passwordReset}>Forget Password?</p>
                        </div>
                        <div className='or pt-2'>
                            <span></span>
                            <p className='px-2'>or</p>
                            <span></span>
                        </div>
                        <div className='social-icon'>
                            <button onClick={googleSignIn}><img src={googleIcon} alt="google-icon" /></button>
                            <button onClick={() => signInWithGithub()}><img src={githubIcon} alt="github-icon" /></button>
                            <button><img src={facebookIcon} alt="facebook-icon" /></button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Login;