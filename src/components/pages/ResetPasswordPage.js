import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

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

ResetPasswordPage.propTypes = {
    validateToken: propTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default ResetPasswordPage;