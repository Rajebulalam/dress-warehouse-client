import React from 'react';
import { Container } from 'react-bootstrap';
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
                            <div className='product' key={product.id}>
                                <img src={product.img} alt="product-img" />
                                <div className='px-3'>
                                    <h2> {product.name} </h2>
                                    <p> {product.description} </p>
                                    <h4> Price : $ {product.price} </h4>
                                    <h5> Quantity : {product.quantity} </h5>
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