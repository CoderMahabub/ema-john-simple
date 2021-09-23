import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
            <h3>order summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Items Ordered: {total}</h5>
        </div>
    );
};

export default Cart;