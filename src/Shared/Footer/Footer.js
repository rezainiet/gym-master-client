import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper mt-1'>
            <div>
                <div>
                    <h4 className='text-success text-center custom-border'>Useful Links</h4>
                </div>
            </div>
            <div className='footer-links'>
                <ul className='custom-border'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;