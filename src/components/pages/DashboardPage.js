import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allGiftsSelector } from '../../reducers/gifts';
import AddGiftCtA from '../ctas/AddBookCtA';
import { fetchGifts } from '../../actions/gifts';

class DashboardPage extends Component {
    componentDidMount = () => this.onInit(this.props);

    onInit = props => props.fetchGifts();

    render() {
        const { isConfirmed, gifts } = this.props;
        return (
            <div>
                {!isConfirmed && <ConfirmEmailMessage />}
    
                {gifts.length === 0 ? <AddGiftCta /> : <p>You have gifts!</p>}
            </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    fetchGifts: PropTypes.func.isRequired,
    gifts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        gifts: allGiftsSelector(state)
    };
}

export default connect(mapStateToProps)(DashboardPage);