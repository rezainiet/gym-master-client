import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import auth from '../../firebase.init';


const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const navigateRegister = () => {
        navigate('/register');
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate('/home')
        } else {
            // User is signed out
            // ...
        }
    });
    return (
        <div className='bg-dark'>
            <h1 className='text-center text-success form-container'>Please Login</h1>
            <div className='w-50 mx-auto'>
                <div className='pb-5'>
                    <div className='bg-light py-5 px-4 rounded'>

                        <Form onSubmit={handleFormSubmit}>
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
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p className='mt-3'>Don't have any account? <span onClick={navigateRegister} className='text-info cursor-pointer'>Register Now</span ></p>
                        </Form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;