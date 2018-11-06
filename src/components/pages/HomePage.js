import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => {
    return (
        <div className="div">
            <h1>Welcome to Gifter</h1>
            <h2>Gifter provides a quick and easy way to send gifts to children online.</h2>
            {isAuthenticated ? <button onClick={() => logout}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
    )
};

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);