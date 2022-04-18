import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        errorMessage = <div><p className='text-danger'>Wrong e-mail or password!</p></div>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const handleToast = () => {
        toast('Signing In...')
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    const handlePasswordReset = () => {
        toast('Password reset mail sent!!')
    }
    return (
        <div className='bg-dark'>
            <h1 className='text-center text-success form-container'>Please Login</h1>
            <div className='w-50 mx-auto'>
                <div className='pb-5'>
                    <div className='bg-light py-5 px-4 rounded'>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                            </Form.Group>
                            {errorMessage}
                            <Button variant="primary" onClick={handleToast} type="submit">
                                Submit
                            </Button>
                            <p className='mt-3'>Don't have any account? <span onClick={navigateRegister} className='text-info cursor-pointer'>Register Now</span ></p>
                            <p className='mt-3'>Forgot password? <span onClick={handlePasswordReset} className='text-info cursor-pointer'>Reset Now</span ></p>
                        </Form>
                        <ToastContainer />
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;