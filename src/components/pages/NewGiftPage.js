import React from 'react';
import SearchGiftForm from '../forms/SearchGiftForm';

class NewGiftPage extends Component {
    state = {
        gift: null
    }

    render() {
        return (
            <Segment>
                <h1>Add new gift</h1>
                <SearchGiftForm />
            </Segment>
        )
    }
}

export default NewGiftPage;