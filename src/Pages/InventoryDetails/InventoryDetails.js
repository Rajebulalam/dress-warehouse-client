import React, { useEffect, useState } from 'react';
import './InventoryDetails.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});

    // Load from Server by Id
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    // Reducing Function


    return (
        <div className='py-5'>
            <h2 className='text-center pb-4'>Inventory Details</h2>
            <Container className='product-details'>
                <div>
                    <img src={user.img} alt="product-img" />
                </div>
                <div className='details'>
                    <div>
                        <h5> Product Id : {user._id} </h5>
                        <h3> {user.name} </h3>
                        <p> {user.description} </p>
                        <h5 className='p-0 m-0'> Price : {user.price} </h5>
                        <h6 className='py-1 m-0'> Quantity : <small>{user.quantity}</small> </h6>
                        <h6 className='p-0 m-0'> Supplier : {user.supplier} </h6>
                    </div>
                    <div>
                        <button className='w-100' type='btn'>Delivered</button>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default InventoryDetails;