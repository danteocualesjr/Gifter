import React, { Component } from 'react';

class SignupPage extends Component {
submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

    render() {
        return(
            <div>
                <SignupForm submit={this.submit} />
            </div>
        )
    }
}

export default SignupPage;