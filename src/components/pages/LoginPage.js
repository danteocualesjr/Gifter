import React from 'react';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
    return (
        <div className="div">
            <h1>Gifter Login Page</h1>
            
            <LoginForm submit={this.submit} />
        </div>
    )
};

export default LoginPage;