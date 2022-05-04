import React from 'react';
import Inventory from '../../Shared/Inventory/Inventory';
import Banner from '../Banner/Banner';
import NewArrivals from '../NewArrivals/NewArrivals';
import Style from '../Style/Style';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <NewArrivals></NewArrivals>
            <Style></Style>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;