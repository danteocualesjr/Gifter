import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';
import SearchGiftForm from '../forms/SearchGiftForm';

class NewGiftPage extends Component {
    state = {
        gift: null
    }

    onGiftSelect = gift => this.setState({ gift });

    render() {
        return (
            <Segment>
                <h1>Add new gift</h1>
                <SearchGiftForm onGiftSelect={this.onGiftSelect} />
            </Segment>
        )
    }
}

export default NewGiftPage;