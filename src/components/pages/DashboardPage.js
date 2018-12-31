import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allGiftsSelector } from '../../reducers/gifts';
import AddGiftCtA from '../ctas/AddBookCtA';
import { fetchGifts } from '../../actions/gifts';

class DashboardPage extends Component {
    componentDidMount = () => this.onInit(this.props);
}

const DashboardPage = ({ isConfirmed, gifts }) => {
    return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}

            {gifts.length === 0 && <AddGiftCta />}
        </div>
    )
};

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    gifts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        gifts: allGiftsSelector(state)
    };
}

export default connect(mapStateToProps)(DashboardPage);