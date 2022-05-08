import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseInventory from '../../../Hooks/UseInventory';
import './Inventory.css';

const Inventory = () => {

    const [products, setProducts] = UseInventory();

    return (
        <div className='py-5 inventory'>
            <Container>
                <h2 className='text-center fw-bold pb-5'>Inventory Items</h2>
                <div className='products'>
                    {
                        products.slice(0, 6).map(product =>
                            <div className='product' key={product._id}>
                                <img src={product.img} alt="product-img" />
                                <div className='px-3'>
                                    <h2> {product.name} </h2>
                                    <p> {product.description} </p>
                                    <h3 className='fs-5'>Supplier : {product.supplier} </h3>
                                    <h5> Price : $ {product.price} </h5>
                                    <h5> Quantity : {product.quantity} </h5>
                                    <div className='py-3 d-flex align-items-center justify-content-center'>
                                        <button className='update-button px-5 py-2 fw-bolder' type="submit"><Link to={`inventory/${product._id}`}>Update</Link></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Inventory;