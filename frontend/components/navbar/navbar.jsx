import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        this.props.logout().then(() => this.props.history.push('/'))
    }

    render() {
        const { currentUser } = this.props;
        const showUser = currentUser ? (
            <div className="user-nav">
                <Link to='/browse'>
                    <span className="navbar-username">{currentUser.username}</span>
                </Link>

                <span onClick={() => this.logoutUser()}
                    className="user-logout">
                    LOGOUT</span>
            </div>
        ) : (
                null
            );

        <div className="main_nav">
            <div className="navbar-container">



                <ul className="navlist">
        
                    <li>
                        <NavLink to='/browse' activeClassName="active">
                            <span className="navbar-text navbar-search">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/search' activeClassName="active">
                            <span className="navbar-text navbar-search">Search</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/collection' activeClassName="active">
                            <span className="navbar-text navbar-library">Your Library</span>
                        </NavLink>
                    </li>
                </ul>

                {displayUser}

            </div>

        </div>
        )
    }
}