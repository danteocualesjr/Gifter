import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import * as actions from '../../actions/auth';
import { allGiftSelector } from '../../reducers/gifts';

const TopNavigation = ({ user, logout, hasGifts }) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">
            Dashboard
        </Menu.Item>
        {hasGifts && (
            <Menu.Item as={Link} to="/gifts/new">
                Add New Gift
            </Menu.Item>
        )}

        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    hasGifts: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user.state.user
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);