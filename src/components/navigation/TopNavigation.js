import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
imported { Link } from 'react-router-dom';

const TopNavigation = (props) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
                <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

export default TopNavigation;