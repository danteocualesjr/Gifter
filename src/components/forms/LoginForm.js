import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err => 
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email and/or password.";
        if (!data.password) errors.password = "Invalid email and/or password.";
        return errors;
    }

    // Debug starting from line 47...

    render() {
        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                {errors.global && (
                    <Message negative>
                        <Message.Header>Ooopppsss! Something went wrong.</Message.Header>
                        <p>{errors.global}</p>
                    </Message>
                )}
                {/* Converting it to Boolean. */}
                <Form.Field error={!!errors.email}>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Enter email here'
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <div className="passwordField">
                {/* Converting it to Boolean. */}
                <Form.Field error={!!errors.password}>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        placeholder='Enter password here.'
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                </div>                
                <Button primary>Log in</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;