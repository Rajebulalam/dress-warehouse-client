import React, { useEffect, useState } from 'react';
import './InventoryDetails.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    const [productQuantity, setProductQuantity] = useState(0);

    // Load from Server by Id
    useEffect(() => {
        const url = `https://sleepy-falls-35762.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setProductQuantity(data.quantity);
            })
    }, [id]);

    // Reduce Quantity
    const handleDeliveredBtn = () => {
        const quantity = productQuantity - 1;
        const newQuantity = { quantity };
        const url = `https://sleepy-falls-35762.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert('update');
                setProductQuantity(data?.quantity || quantity);
            })
    }

    // Taken Input Value
    const [increase, setIncrease] = useState(0);
    const handleNumber = event => {
        setIncrease(event.target.value);
    }

    // Increase Quantity
    const handleIncrease = (e) => {
        const quantity = parseInt(productQuantity) + parseInt(increase);
        const newQuantity = { quantity };
        const url = `https://sleepy-falls-35762.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert('Increase Update');
                setProductQuantity(data?.quantity || quantity);
            })
    }

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
                        <h6 className='py-1 m-0'> Quantity : <small>{productQuantity}</small> </h6>
                        <h6 className='p-0 m-0'> Supplier : {user.supplier} </h6>
                    </div>
                    <div>
                        <button onClick={handleDeliveredBtn} className='w-100' type='btn'>Delivered</button>
                        <input onBlur={handleNumber} className='my-2' type="number" name="number" id="number" />
                        <button onClick={handleIncrease} className='w-100' type="btn">Restock</button>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default InventoryDetails;