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

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default SignupPage;