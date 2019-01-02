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

    addGift = gift =>
        this.props
            .createGift(gift)
            .then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <Segment>
                <h1>Add new gift</h1>
                <SearchGiftForm onGiftSelect={this.onGiftSelect} />

                {this.state.gift && (
                    <GiftForm submit={this.addGift} gift={this.state.gift} />
                )}
            </Segment>
        );
    }
}

NewGiftPage.propTypes = {
    createGift: PropTypes.func.isRequired,
    history: propTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, { createGift })(NewGiftPage);