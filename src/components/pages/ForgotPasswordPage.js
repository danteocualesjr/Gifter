import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

class ForgotPasswordPage extends from Component {
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