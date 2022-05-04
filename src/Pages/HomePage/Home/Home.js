import React from 'react';
import Inventory from '../../Shared/Inventory/Inventory';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;