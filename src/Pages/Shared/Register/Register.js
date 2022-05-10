import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Register.css';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import facebookIcon from '../../../images/facebook.png';
import Spinner from '../Spinner/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    // Set Input Value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    // Navigate
    const navigate = useNavigate();

    // React Firebase Hooks
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // To Get User from Firebase
    const [user] = useAuthState(auth);

    // Get Input Value
    const handleEmail = event => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword = event => {
        const password = event.target.value;
        setPassword(password);
    }

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should contain at lest 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum 8 digit!');
            return;
        } else {
            await createUserWithEmailAndPassword(email, password);
            // toast('Sent Verification Email');
            event.target.reset();
        }
    }

    // Google Sign In Method
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const googleSignIn = async () => {
        await signInWithGoogle(email);
    }

    // Sign in With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    // If user has than you can use Protected Route
    useEffect(() => {
        if (user) {
            navigate('/home');
            toast('Register Success full');
        }
    }, [user]);

    return (
        <div className='py-5 register'>
            <Helmet>
                <title>Dress Warehouse - Register</title>
            </Helmet>
            <Container>
                <form onSubmit={handleSubmit} className='form shadow'>
                    <h2 className='text-center fw-bold'>Create Account</h2>
                    <div>
                        <input className='mb-3 p-2 rounded' required type="text" name="name" id="name" placeholder='Name' />
                        <input onBlur={handleEmail} className='mb-3 p-2 rounded' required type="email" name="email" id="email" placeholder='Email' />
                        <input onBlur={handlePassword} className='mb-3 p-2 rounded' required type="password" name="password" id="password" placeholder='Password' />
                        <div>
                            <input type="checkbox" id="checkbox" required name="checkbox" />
                            <label htmlFor="checkbox"> I agree to the <span className='color'>Terms</span> and <span className='color'>Privacy Policy</span> </label>
                        </div>
                        <div>
                            <p className='text-danger'> {err} </p>
                            <p> {loading && <Spinner></Spinner>} </p>
                            <p className='text-danger'> {error?.message && 'Already have an account using this Email!'} </p>
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

export default Register;