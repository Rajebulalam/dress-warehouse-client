import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/items?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);
        }
        getOrders();
    }, [user.email]);

    // Delete Product
    const handleDelete = id => {
        const proceed = window.confirm('You want to delete!');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        } else {
            alert('Nothing change');
        }
    }

    return (
        <div className='py-5'>
            <Container>
                <h2 className='text-center pb-4 fw-bold'>My Items</h2>
                <div className='products'>
                    {
                        products.map(product =>
                            <div className='product' key={product._id}>
                                <img src={product.img} alt="product-img" />
                                <div className='px-3'>
                                    <h2> {product.name} </h2>
                                    <p> {product.description} </p>
                                    <h3 className='fs-5'>Supplier : {product.supplier} </h3>
                                    <h5> Price : $ {product.price} </h5>
                                    <h5> Quantity : {product.quantity} </h5>
                                    <div className='py-3 d-flex align-items-center justify-content-center'>
                                        <button onClick={() => handleDelete(product._id)} className='update-button px-5 py-2 fw-bolder' type="submit">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='manage-btn pt-5 m-0'>
                    <button type='button'>Delete</button>
                </div>
            </Container>
        </div>
    );
};

export default MyItems;