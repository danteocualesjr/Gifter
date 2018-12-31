import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import ForgotPassWordForm from '../forms/ForgotPasswordForm';
import { resetPasswordRequest } from '../../actions/auth';

class ForgotPasswordPage extends Component {
    state= {
        success: false
    };

    submit = data =>
        this.props
            .resetPasswordRequest(data)
            .then(() => this.setState({ success: true }));

    render() {
        return(
            <div>
                {this.state.success ? (
                    <Message>Email has been sent.</Message>
                ) : (
                    <ForgotPassWordForm submit={this.submit} />
                )}
            </div>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
};

export default ForgotPasswordPage;