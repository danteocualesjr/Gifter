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
        }]
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default SearchGiftForm;