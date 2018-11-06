import React from 'react';
import { connect } from 'react-redux';

const DashboardPage = () => {
    return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}
        </div>
    )
};

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(DashboardPage);