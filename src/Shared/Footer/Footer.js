import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer' className='footer-wrapper mt-1'>
            <div>
                <div>
                    <h4 className='text-success text-center custom-border'>Useful Links</h4>
                </div>
            </div>
            <div className='footer-links'>
                <ul className='custom-border'>
                    <li><a href="/about">About</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;