import React, { Component } from 'react';

class ResetPasswordPage extends Component {
    state = {
        loading: true,
        success: false
    }

    componentDidMount() {
        this.props.validateToken(this.props.match.params.token)
    }

    render() {
        const { loading, success } = this.state;
        return (
            <div>
                { loading && <Message>Loading</Message>}
                { !loading && success && <Message>Form</Message>}
                { !loading && !success && <Message>Invalid Token</Message>}
            </div>
        );
    }
}

export default ResetPasswordPage;