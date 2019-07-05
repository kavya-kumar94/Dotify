import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="login-signup">

            <div className="title">
                <span>
                    <Link className="white" to="/"><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/white_spotify.png"/></Link>
                </span>
                <Link className="header" to="/">Dotify</Link>
            </div>

            <div className="links">
                <li role="separator" className="divider">

                </li>
                <span>
                    <Link to="/signup">Sign up</Link>
                </span>
                <span>
                    <Link to="/login">Login</Link>
                </span>
            </div>
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;