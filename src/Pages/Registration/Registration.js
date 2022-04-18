import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../../firebase.init';

const Registration = () => {
    const navigate = useNavigate();

    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;

        console.log(password, email, name);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const navigateLogin = () => {
        navigate('/login')
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
            <h1 className='text-center text-success form-container'>Register Now!</h1>
            <div className='w-50 mx-auto'>
                <div className='pb-5'>
                    <div className='bg-light py-5 px-4 rounded'>

                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} required type="text" placeholder="Name" />
                            </Form.Group>
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
                            <p className='mt-3'>Already have acount? <span onClick={navigateLogin} className='text-info cursor-pointer'>Login Now</span ></p>
                        </Form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;