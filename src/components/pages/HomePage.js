import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="div">
            <h1>Welcome to Gifter</h1>
            <h2>Gifter provides a quick and easy way to send gifts to children online.</h2>
            <Link to="/login">Click here to log in</Link>
        </div>
    )
}

export default HomePage;