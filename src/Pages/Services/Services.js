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
            <section class="section-services">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-10 col-lg-8">
                            <div class="header-section">
                                <h2 class="title">Exclusive <span>Services</span></h2>
                                <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">



                    </div>
                    <div class="row gx-2">
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