import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';
import SearchGiftForm from '../forms/SearchGiftForm';
import BookForm from '../forms/GiftForm';
import { createGift } from '../../actions/gifts';

class NewGiftPage extends Component {
    state = {
        gift: null
    }

    onGiftSelect = gift => {
        this.setState({ gift });
        axios
            .get(`/api/gifts/fetchPages?goodreadsId=${book.goodreadsId}`)
            .then(res => res.data.pages)
            .then(pages => this.setState({ gift: { ...gift, pages } }));
    };


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