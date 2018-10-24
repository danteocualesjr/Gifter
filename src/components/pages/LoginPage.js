import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
    submit = data => 
        this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (
            <div className="div">
                <h1>Gifter Login Page</h1>
            
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default LoginPage;