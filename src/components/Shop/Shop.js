import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();
        for (const key in savedCart) {

            const AddedProduct = products.find(product => product.key === key);
            console.log(key);
            console.log(AddedProduct);
        }

    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //Save to local storage for now
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;