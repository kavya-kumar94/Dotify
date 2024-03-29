import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { login } from './../actions/session_actions';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.demoUser = this.demoUser.bind(this);
        // this.demoLogin = this.demoLogin.bind(this);
        // this.helperfxn = this.helperfxn.bind(this);
    }

    // demoLogin() {
    //    this.props.demoLogin({username: 'Demo User', password:'123456'}).then(() => this.helperfxn) 
    // }
    demoUser(e) {
        e.preventDefault();
        const demouser = { username: 'demouser', password: '123456' };
        this.props.loginDemo(demouser).then( () => this.props.history.push('/browse/featured'));
    }

    componentDidMount() {
        document.title = 'Dotify'
    }

    // helperfxn() {
    //     this.props.history.push('/browse/featured');
    // }

    render() {

        return (
        <div className="splash">
            <div className="splash-nav">
                <div className="splash-navlinks">
                    {/* <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link> */}
                </div>
            </div>

            <div className="splash-img">
                <h1>Music for everyone.</h1>
                <h3>Millions of songs. No credit card needed.</h3>
                <button onClick={this.demoUser} id="splash-button"> DOTIFY DEMO </button>
            </div>

            <div className="footer">
                <div className="footer-header">
                    <span>
                            <Link className="white" to="/"><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/white_spotify.png"/></Link>
                    </span>
                    <Link to="/" className="logo">Dotify</Link>
                </div>
                <div className="lists">
                    <div>
                        <h3>Sources</h3>
                            <h4><a href="https://github.com/kavya-kumar94/Dotify" target="_blank">GitHub </a> </h4>
                            <h4><a href="https://www.linkedin.com/in/kavya-kumar-452635100/" target="_blank">LinkedIn </a> </h4>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <h4><a href="/#/signup"> Sign Up </a> </h4>
                        <h4><a href="/#/login"> Log In </a> </h4>
                        <h4><a href="/#/"> Home </a> </h4>
                    </div>
                </div>

                <div className="web">
                    <h3><a href="https://kavyakumar.com/" target="_blank">Developed by Kavya Kumar</a></h3>
                </div>

            </div>

        </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginDemo: (user) => dispatch(login(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Splash))