import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div className="div">
                <h1>Gifter Login Page</h1>
            
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}

export default LoginPage;