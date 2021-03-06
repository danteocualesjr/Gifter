import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchGiftForm extends Component {
    state = {
        query: '',
        loading: false,
        options: [],
        gifts: {}
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({
            query: data
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    }

    onChange = (e, data) => {
        this.setState({ query: data.value });
        this.props.onGiftSelect(this.state.gifts[data.value]);
    };

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true });
        axios
            .get(`/api/gifts/search?q=${this.state.query}`)
            .then(res => res.data.gifts)
            .then(books => {
                const options = [];
                const giftsHash = {};
                gifts.forEach(gift => {
                    giftsHash[gift.giftId] = gift;
                    options.push({
                        key: gift.giftId,
                        value: gift.giftId,
                        text: gift.title
                    })
                });
                this.setState({ loading: false, options, gifts: giftsHash })
            });
    };

    render() {
        return (
            <Form>
                <Dropdown 
                    search
                    fluid
                    placeholder="Search for a gift"
                    value={this.state.query}
                    onSearchChange={this.onSearchChange}
                    options={this.state.options}
                    loading={this.state.loading}
                    onChange={this.onChange}
                />
            </Form>
        );
    }
}

SearchGiftForm.propTypes = {
    onGiftSelect: PropTypes.func.isRequired
};

export default SearchGiftForm;