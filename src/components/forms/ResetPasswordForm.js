import React, { Component } from 'react';

class ResetPasswordForm extends Component {
    state = {
        data: {
            token: this.props.token
        },
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
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                    );
        }
    };

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default ResetPasswordForm;