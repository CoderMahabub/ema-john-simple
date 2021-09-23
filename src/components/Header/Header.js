import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
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
                <i className="fas fa-shopping-cart"><span> 0</span></i>
            </section>
        </div>
    );
};

export default Header;