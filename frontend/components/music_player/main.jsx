import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "main-div">
                <ul className="browse-links">
                    <li>
                        <div className="link-main">
                            <NavLink to="/">
                            PLAYLISTS 
                            </NavLink>
                        </div>
                    </li>

                    <li>
                        <div className="link-main">
                        <NavLink to="/">
                            ALBUMS
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className="link-main">
                        <NavLink to="/">
                        ARTISTS
                        </NavLink>
                        </div>
                    </li>
                </ul>

                {/* <p className="made-for">Made for {currentUser.username}</p> */}
            </div>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

export default withRouter(connect(msp, null)(Main));