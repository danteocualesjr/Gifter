import React, { Component } from 'react';
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

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true });
        axios.get(`/api/gifts/search?q=${this.state.query}`)
    }

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
                />
            </Form>
        );
    }
}

export default SearchGiftForm;