import React, { useEffect, useState } from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import facebookIcon from '../../../images/facebook.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {

    // Set Input Value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    // Navigate
    const navigate = useNavigate();

    // React Firebase Hooks
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // To Get User from Firebase
    const [user] = useAuthState(auth);

    // Get Input Value
    const handleEmail = event => {
        const email = event.target.value;
        setEmail(email);
        console.log(email);
    }
    const handlePassword = event => {
        const password = event.target.value;
        setPassword(password);
        console.log(password);
    }

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should contain at lest 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum 8 digit!');
            return;
        } else {
            await signInWithEmailAndPassword(email, password);
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

    // Reset Password With Email
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const passwordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Email Send');
        } else {
            alert('Put An Email Please!');
        }
    }

    // If user has than you can use Protected Route
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user]);

    return (
        <div className='py-5 register'>
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