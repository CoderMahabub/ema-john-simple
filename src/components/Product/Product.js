import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>product:{name}</h4>
                <p><small>by {seller}</small></p>
                <b>${price}</b>
                <p>only {stock} left in stock - order soon</p>
            </div>
        </div>
    );
};

export default Product;