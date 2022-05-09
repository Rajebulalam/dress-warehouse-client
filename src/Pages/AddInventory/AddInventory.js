import React from 'react';
import { Container } from 'react-bootstrap';
import './AddInventory.css';

const AddInventory = () => {

    // Add Product by User
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const img = event.target.img.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const productItem = {
            email,
            img,
            name,
            description,
            supplier,
            price,
            quantity,
        };

        // Send Data to Server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('success!');
                event.target.reset();
            })
    }
    return (
        <div className='py-5'>
            <Container>
                <h2 className='text-center fw-bold pb-4'>Add Inventory Product</h2>
                <form onSubmit={handleSubmit} className='add-form'>
                    <input className='mb-3' type="email" name="email" id="email" placeholder='Email' />
                    <input className='mb-3' type="text" name="img" id="img" placeholder='Image Link' />
                    <input className='mb-3' type="text" name="name" id="name" placeholder='Product Name' />
                    <input className='mb-3' type="text" name="description" id="description" placeholder='Description' />
                    <input className='mb-3' type="text" name="supplier" id="supplier" placeholder='Supplier' />
                    <input className='mb-3' type="text" name="price" id="price" placeholder='Price' />
                    <input className='mb-3' type="text" name="quantity" id="quantity" placeholder='Quantity' />
                    <div className='addItem-btn pt-2 m-0 d-flex align-items-center justify-content-center'>
                        <button className='btn px-5 py-2' type='submit'>Add Item</button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddInventory;