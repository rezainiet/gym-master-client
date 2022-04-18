import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center py-20'>
            <img src="error-404.png" alt="Not Found" />
            <button onClick={() => navigate('/')} className='bg-purple-500 px-3 py-2 rounded-md'>Back to Home</button>
        </div>
    );
};

export default NotFound;