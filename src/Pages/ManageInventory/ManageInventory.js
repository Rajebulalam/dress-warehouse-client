import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import UseInventory from '../../Hooks/UseInventory';

const ManageInventory = () => {

    // Get Product by Hooks
    const [products, setProducts] = UseInventory();

    // Delete Product
    const handleDelete = id => {
        const proceed = window.confirm('You want to delete!');
        if (proceed) {
            const url = `https://sleepy-falls-35762.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('delete');
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
            <Helmet>
                <title>Dress Warehouse - Manage Items</title>
            </Helmet>
            <Container>
                <h2 className='text-center fw-bold pb-4'>Manage Items</h2>
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
                    <button type='button'><Link to='/addNewItem'>Add New Item</Link></button>
                </div>
            </Container>
        </div>
    );
};

export default ManageInventory;