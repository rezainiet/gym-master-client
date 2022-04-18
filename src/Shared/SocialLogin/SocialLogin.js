import React, { useState } from 'react';
import auth from '../../firebase.init';
import googleLogo from '../../Images/google.ico';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorELement;

    if (error) {
        errorELement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <p className='text-center text-danger'>Or</p>
            {errorELement}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary px-5'>
                    <img src={googleLogo} alt="" />
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;