import React, { Component } from 'react';

class ForgotPasswordPage extends from Component {
    state= {
        success: false
    };

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

export default ForgotPasswordPage;