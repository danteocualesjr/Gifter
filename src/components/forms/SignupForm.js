import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    render() {
        const { data, errors, load } = this.state;
        return(
            <div>

            </div>
        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;