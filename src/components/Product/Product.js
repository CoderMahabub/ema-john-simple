import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
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
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'
                >{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;