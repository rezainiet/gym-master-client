import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import googleLogo from '../../Images/google.ico'


const SocialLogin = () => {
    const [user, setUser] = useState({});
    const handleSignInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user.displayName)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-center text-danger'>Or</p>
            <div className='text-center'>
                <button onClick={handleSignInWithGoogle} className='btn btn-primary px-5'>
                    <img src={googleLogo} alt="" />
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;