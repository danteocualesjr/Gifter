import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import gifts from '../../reducers/gifts';

const DashboardPage = ({ isConfirmed }) => {
    return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}

            {gifts.length === 0 && <AddGiftCta />}
        </div>
    )
};

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        gifts: state.gifts
    }
}

export default connect(mapStateToProps)(DashboardPage);