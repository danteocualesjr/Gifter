import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

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
    };

    validate = (data) => {
        const errors = {};
        if (!data.password) errors.password = "Invalid password";
        return errors;
    }

    render() {
        const { data } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <div className="emailField">
                <Form.Field>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Enter email here'
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                </div>
                <div className="passwordField">
                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        placeholder='Enter password here.'
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                </div>                
                <Button primary>Log in</Button>
            </Form>
        );
    }
}

export default LoginForm;