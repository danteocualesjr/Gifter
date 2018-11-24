import React, { Component } from 'react';

class ResetPasswordForm extends Component {
    state = {
        data: {},
        loading: false,
        errors: {}
    };

    onChange = e => 
    this.setState({
        ...this.state,
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default ResetPasswordForm;