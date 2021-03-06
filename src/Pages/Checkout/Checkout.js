import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleFormSubmit = event => {
    event.preventDefault();
}

const handleOrderSubmit = () => {
    toast('Succesfully Order Submitted!')
}

const Checkout = () => {
    const { checkoutName } = useParams();
    return (
        <div className='container-fluid checkout-container text-white items-center'>
            <div className='text-container'>
                <h3>Submit a request to buy</h3>
                <h1>{checkoutName}</h1>
            </div>
            <div className='w-75 items-center'>
                <form onSubmit={handleFormSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputName4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Choose...</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={handleOrderSubmit} className="btn btn-primary">Complete Order</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Checkout;