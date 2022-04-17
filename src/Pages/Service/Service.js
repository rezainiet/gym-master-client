import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div class="single-service col-12 col-md-4">
            <div class="part-1">
                <img src={img} className='w-100 rounded mb-3' alt="" />
                <h3 class="title">{name}</h3>
            </div>
            <div class="part-2">
                <p class="description">{description}</p>
                <button className='btn btn-danger'>BUY THIS SERVICE!</button>
            </div>
        </div>
    );
};

export default Service;