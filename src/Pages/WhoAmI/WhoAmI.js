import React from 'react';
import img from '../../Images/aboutMe.png'
import './WhoAMI.css'

const WhoAmI = () => {
    return (
        <div className='d-flex container-fluid w-100 about-wrapper'>
            <div className='row w-50 order-1'>
                <img src={img} className='w-100 img-fluid' alt="" />
            </div>
            <div className='about-wrapper order-2 w-50'>
                <h1 className='fw-bold'>ABOUT ME</h1>
                <p className=''>I'M A TRAINER! <br /> I HAVE 5 YEARS OF EXPERIENCE ON FITNESS, GYM, PERSONAL EXCERCISE. <br /> I HAVE 100+ STUDENTS FROM WHEN I STARTED TEACHING TO OTHERS.</p>
            </div>
        </div>
    );
};

export default WhoAmI;