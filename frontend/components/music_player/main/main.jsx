import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter, Link, NavLink } from 'react-router-dom';
import { logoutCurrentUser } from '../../../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import ArtistIndex from './artist_index';
import PlaylistIndex from './playlist_index'
import AlbumIndex from './album_index'

class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className = "main-div">
                <ul className="browse-links">
                    <li>
                        <div className="link-main">
                            <NavLink to="/library/playlists">
                            PLAYLISTS 
                            </NavLink>
                        </div>
                    </li>

                    <li>
                        <div className="link-main">
                        <NavLink to="/library/albums">
                            ALBUMS
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className="link-main">
                        <NavLink to="/library/artists">
                        ARTISTS
                        </NavLink>
                        </div>
                    </li>
                </ul>
                    {/* <div className="username-show">{currentUser.username}</div> */}
                <ProtectedRoute exact path='/library/artists' component={ArtistIndex} />
                <ProtectedRoute exact path='/library/playlists' component={PlaylistIndex} />
                <ProtectedRoute exact path='/library/albums' component={AlbumIndex} />
            
            </div>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.session.id
    }
}

export default withRouter(connect(msp, null)(Main));