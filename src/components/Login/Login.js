import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>LogIn</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="LogIn" />
                </form>
                <p>New to EmaJohn <Link to="/register">Create Account</Link></p>
                <div>--------------or-----------</div>
                <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;