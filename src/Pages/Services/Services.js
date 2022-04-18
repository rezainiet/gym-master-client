import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <section className="section-services">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="header-section">
                                <h2 className="title">Exclusive <span>Services</span></h2>
                                <p className="description">There are many variations of Services that I will give you. <br /> You can try at least one of these.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">



                    </div>
                    <div className="row gx-2">
                        {
                            services.map(service => <Service key={service.key} service={service}></Service>)
                        }

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Services;