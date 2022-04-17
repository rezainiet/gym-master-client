import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = name => {
        navigate(`/checkout/${name}`)
    }
    return (
        <div className="single-service col-12 col-md-4">
            <div className="part-1">
                <img src={img} className='w-100 rounded mb-3' alt="" />
                <h3 className="title">{name}</h3>
                <h2>Cost <span className='fw-bold text-info'>${price}</span></h2>
            </div>
            <div className="part-2">
                <p className="description">{description}</p>
                <button onClick={() => navigateToCheckout(name)} className='btn btn-danger'>BUY THIS SERVICE!</button>
            </div>
        </div>
    );
};

export default Service;