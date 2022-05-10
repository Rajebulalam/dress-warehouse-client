import React from 'react';
import { Helmet } from 'react-helmet-async';
import Inventory from '../../Shared/Inventory/Inventory';
import Banner from '../Banner/Banner';
import NewArrivals from '../NewArrivals/NewArrivals';
import Style from '../Style/Style';
import Subscribe from '../Subscribe/Subscribe';
import BestSupply from './BestSupply/BestSupply';

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    |<title> Dress Warehouse </title>
                </Helmet>
            </div>
            <Banner></Banner>
            <Inventory></Inventory>
            <NewArrivals></NewArrivals>
            <BestSupply></BestSupply>
            <Style></Style>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;