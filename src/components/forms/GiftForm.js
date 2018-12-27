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

    validate = data => {
        const errors = {};
        if (!data.title) errors.title = "Can't be blank";
        if (!data.authors) errors.authors = "Can't be blank";
        if (!data.pages) errors.pages = "Can't be balnk";
        return errors;
    };

    render() {
        const { errors, data, loading } = this.state;

        return (
            <Segment>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Form.Field error={!!errors.title}>
                                    <label htmlFor="title">Book Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                        value={data.title}
                                        onChange={this.onChange}
                                    />
                                    {errors.title && <InlineError text={errors.title} />}
                                </Form.Field>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </Segment>
        )
    }

}

export default GiftForm;