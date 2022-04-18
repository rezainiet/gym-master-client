import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;