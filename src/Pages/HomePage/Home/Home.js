import React from 'react';
import Inventory from '../../Shared/Inventory/Inventory';
import Banner from '../Banner/Banner';
import Style from '../Style/Style';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Style></Style>
        </div>
    );
};

export default Home;