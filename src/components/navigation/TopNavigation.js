import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
imported { Link } from 'react-router-dom';

const TopNavigation = (props) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Menu position="right"></Menu.Menu>
    </Menu>
);

export default TopNavigation;