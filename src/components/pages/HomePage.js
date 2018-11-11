import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => {
    return (
        <div>
            <h1>Welcome to Gifter</h1>
            <h2>Gifter provides a quick and easy way to send gifts to children online.</h2>
            {isAuthenticated ? (
                <button onClick={() => logout()}>Logout</button>
            ) : ( 
            <div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</div>
            )}
        </div>
    )

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);