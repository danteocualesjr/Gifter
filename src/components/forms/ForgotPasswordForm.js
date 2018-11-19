import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class ForgotPasswordForm extends Component {
    state={
        data: {}.
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ..this.state,
            data: {...this.state.data, [e.target.name]: e.target.value }
        });

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default ForgotPasswordForm;