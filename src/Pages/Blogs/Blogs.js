import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-dark'>
            <h1 className='text-primary text-center'>Questions!</h1>
            <div className="blogs-container bg-dark d-flex justify-content-center">
                <div className="blog bg-secondary
                text-white rounded w-75 align-items-center p-3">
                    <h3 className="blog-title text-info">Difference between authorization and authentication</h3>
                    <p className='text-white'><span className='fw-bold'>Authentication</span> is the process of verifying who someone is! <span className='fw-bold'>Authorization</span> is the process of verifying what specific applications, files, and data a user has access to. <br /> <span className='fw-bold'>Authentication Example</span> Authentication verifies who the user is. <br /> <span className='fw-bold'>Authorization Example</span> Authorization determines what recourses a user can access.</p>
                </div>
            </div>
            <div className="blogs-container bg-dark d-flex justify-content-center mt-5">
                <div className="blog bg-secondary
                    text-white rounded w-75 align-items-center p-3">
                    <h3 className="blog-title text-info">Why I using firebase? What other options do you have to implement authentication</h3>
                    <p className='text-white'>I'm using <span className='fw-bold'>Firebase</span> for Authentication and Hosting. <br /> There are many other options available for using Authentication such as <br /> 1. Single-Factor/Primary Authentication <br /> 2. Two-Factor Authentication <br /> 3. Single Sign-On <br /> 4. Multi-Factor Authentication <br /> 5. Extensible Authentication Protocol</p>
                </div>
            </div>
            <div className="blogs-container bg-dark d-flex justify-content-center mt-5 pb-5">
                <div className="blog bg-secondary
                    text-white rounded w-75 align-items-center p-3">
                    <h3 className="blog-title text-info">What other services does firebase provide other than authentication</h3>
                    <p className='text-white'>Firebase is a tool it provides <br /> 1. Tracking analytics <br /> 2. reporting and fixing app crashes <br /> 3. creating marketing and product experiment. etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;