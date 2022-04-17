import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhoAmI from '../WhoAmI/WhoAmI';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhoAmI></WhoAmI>
        </div>
    );
};

export default Home;