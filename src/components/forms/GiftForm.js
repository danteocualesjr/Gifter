import React, { Component } from 'react';

class GiftForm extends Component {
    state = {
        data: {
            giftId: this.props.gift.giftId,
            title: this.props.gift.title,
            authors: this.props.gift.authors,
            cover: this.props.gift.covers[0],
            pages: this.props.gift.pages
        },
        covers: this.props.gift.covers,
        index: 0,
        loading: false,
        errors: {}
    };

    

}

export default GiftForm;