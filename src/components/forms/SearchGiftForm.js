import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchGiftForm extends Component {
    state = {
        query: '',
        loading: false,
        options: [{
            key: 1,
            value: 1,
            text: "first gift"
        },{
            key: 1,
            value: 1,
            text: "first gift"
        }],
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
                />
            </Form>
        );
    }
}

export default SearchGiftForm;