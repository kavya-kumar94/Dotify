import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    // <Route path={path} exact={exact} render={(props) => (
    //     !loggedIn ? (
    //         <Component {...props} />
    //     ) : (
    //             <Redirect to="/" />
    //         )
    // )} />
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Redirect to="/browse/featured" /> : <Component {...props} />
        )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    // <Route path={path} exact={exact} render={(props) => (
    //     loggedIn ? (
    //         <Component {...props} />
    //     ) : (
    //             <Redirect to="/" />
    //         )
    // )} />
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));