import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            <section className="search-bar">
                <input type="Type here to search" name="" id="" />
                <span>{cartIcon} 0</span>
            </section>
        </div>
    );
};

export default Header;