import React from 'react';

const UserRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => <Component {...props} />} />
    )
};

export default UserRoute;