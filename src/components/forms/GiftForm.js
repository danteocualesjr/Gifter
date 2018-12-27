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

    componentWillReceiveProps(props) {
        this.setState({
            data: {
                giftId: props.gift.giftId,
                title: props.gift.title,
                authors: props.gift.authors,
                cover: props.gift.covers[0],
                pages: props.gift.pages
            },
            covers: props.gift.covers
        });
    }

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onChangeNumber = e => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: parseInt(e.target.value, 10)
            }
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    changeCover = () => {
        const { index, covers } = this.state;
        const newIndex = index + 1 >= covers.length ? 0 : index + 1;
        this.setState({
            index: newIndex,
            data: { ...this.state.data, cover: covers[newIndex] }
        });
    };

}

export default GiftForm;