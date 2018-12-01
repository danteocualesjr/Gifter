import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

const TopNavigation = (props) => (
    <Menu secondary pointing>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Menu position="right"></Menu.Menu>
    </Menu>
);

export default TopNavigation;