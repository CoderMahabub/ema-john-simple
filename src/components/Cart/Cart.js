import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product?.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const totalTax = ((total + shipping) * 0.10);
    const grandTotal = (total + shipping + totalTax).toFixed(2);
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <table>
                <tr>
                    <td>Items Ordered</td>
                    <td>: {totalQuantity}</td>
                </tr>
                <tr>
                    <td>Ordered Price</td>
                    <td>: {total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shopping</td>
                    <td>: {shipping}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>: {totalTax.toFixed(2)}</td>
                </tr>
                <tr className="total">
                    <td>Order Total</td>
                    <td>: {grandTotal}</td>
                </tr>
            </table>
        </div>
    );
};

export default Cart;