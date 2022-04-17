import React from 'react';
import banner1 from '../../Images/banner/banner1.png'

const Banner = () => {
    return (
        <div className='bg-dark'>
            <div className="image-container">
                <img src={banner1} className='w-100' alt="" />
            </div>
            <div className="text-container text-white">
                <h3>Are you looking for</h3>
                <h1>A <span>Personal Trainer?</span></h1>
            </div>
        </div>
    );
};

export default Banner;