import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../actions/playlist_actions';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    logoutUser() {
        this.props.logout().then(() => this.props.history.push('/'))
    }

    render() {
        const { currentUser, playlists } = this.props;
        const showUser = currentUser ? (
            <div className="user-nav">
                <Link className="user-link"to='/browse'>
                    <svg width="20" height="20" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg"><title>User Icon</title><path d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z" fill="currentColor"></path></svg>
                    <div className="navbar-username">{currentUser.username}</div>
                </Link>

                <button onClick={() => this.logoutUser()}
                    className="user-logout">
                    LOGOUT</button>
            </div>
        ) : (
                null
            );

        let playlistsNew = playlists.map((playlist, idx) => {
            return (
                <div key={idx} className="">
                    <li activeClassName="newactive"><NavLink to={`/playlists/${playlist.id}`}>{playlist.title}</NavLink></li>
                </div>
            )
        })

        return(
              
                <div className="main_nav">
                    <div className="navbar-container">
                        <ul className="listnav">
                                <div className="browse-header">
                                <NavLink  className="white-browse" to="/browse/featured"><img className="white-browse" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/white_spotify.png" />
                                    </NavLink>
                                    <NavLink className="header" to="/browse/featured">Dotify</NavLink>
                                </div>
                            
                            <li>
                                <NavLink className="inactive" activeClassName="active" to='/browse/featured' >
                                    <div className="navbar-text">
                                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
                                        {/* <img className="home" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/home-logo.png" /> */}
                                        <div className="hometag">Home</div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="inactive" activeClassName="active" to='/search' >
                                    <div className="navbar-text">
                                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" ></path></svg>
                                        {/* <img className="search" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/search-logo.png"/> */}
                                        <div className="searchtag">Search</div>
                                        </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="inactive" activeClassName="active" to='/library/playlists' >
                                    <div className="navbar-text navbar-library">
                                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>
                                    {/* <i className="nav-icon spoticon-collection-16"></i> */}
                                        <div className="libtag">Your Library</div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <div className="play-style">PLAYLISTS</div>
                                <ul className="list-of-playlists">
                                    {playlistsNew}

                                </ul>
                            </li>
                        </ul>
                    </div>
                    {showUser}
                </div>
        )
    }
}

const msp = state => {
    return {
        playlists: Object.values(state.entities.playlists)
    }
}


const mdp = dispatch => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    }
}

export default connect(msp, mdp)(Navbar);