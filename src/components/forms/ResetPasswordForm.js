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

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({  errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
        }
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default ResetPasswordForm;