import React, { Component } from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';

const TopNavigation = ({ user }) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
                <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired
};

export default TopNavigation;