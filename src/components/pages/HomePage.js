import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="div">
            <h1>Gifter Home Page</h1>
            <h2>A quick and easy way to send gifts to children online.</h2>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default HomePage;