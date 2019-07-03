import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { loginDemo } from './../actions/session_actions';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.helperfxn = this.helperfxn.bind(this);
    }

    demoLogin() {
       this.props.demoLogin().then(() => this.helperfxn) 
    }

    componentDidMount() {
        document.title = 'Dotify'
    }

    helperfxn() {
        this.props.history.push('/browse/featured');
    }

    render() {
        <div className="splash">
            <div className="splash-nav">
                <div className="splash-navlinks">
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                    <button onClick={this.demoLogin}>Demo</button>
                </div>
            </div>

            <div className="splash-img">
                <h1>Music for everyone.</h1>
                <h3>Millions of songs. No credit card needed.</h3>
                <button id="splash-button">GET DOTIFY FREE</button>
            </div>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    demoLogin: () => dispatch(loginDemo())
});

export default withRouter(connect(null, mapDispatchToProps)(Splash))