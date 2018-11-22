import React, { Component } from 'react';

class ResetPasswordPage extends Component {
    state = {
        loading: true,
        success: false
    }

    render() {
        const { loading, success } = this.state;
        return (
            <div>
                { loading && <Message>Loading</Message>}
            </div>
        )
    }
}

export default ResetPasswordPage;