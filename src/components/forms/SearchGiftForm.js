import React, { Component } from 'react';

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