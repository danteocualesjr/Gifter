import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';

class ConfirmationPage extends Component {
    state = {
        loading: true,
        success: false
    }

    render() {
        return (
            <div>
                {loading && (
                    <Message icon>
                        <Icon name="circle notched" loading />
                        <Message.Header>Your email is being validated</Message.Header>
                    </Message>
                )}
            </div>
        );
    }
}

export default ConfirmationPage;