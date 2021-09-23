import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const totalTax = ((total + shipping) * 0.10);
    const grandTotal = (total + shipping + totalTax).toFixed(2);
    return (
        <div>
            <h3>order summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Items Ordered: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {totalTax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;