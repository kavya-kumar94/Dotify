import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchPlaylists, fetchPlaylist } from '../../../actions/playlist_actions';
import Modal from '../../playlists/playlist_modal'
import { openModal } from '../../../actions/modal_actions'
import { ProtectedRoute } from '../../../util/route_util'
import PlaylistShow from './playlist_show'


class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render() {
        let { currentUser,playlists } = this.props
            let playlistsNew = playlists.map((playlist,idx) => {
                return (
                    <div key={idx} className="playlist-link">
                        <li><NavLink to={`/playlists/${playlist.id}`}><img id="cover-img" src={playlist.playlist_image} /></NavLink></li>
                        <li className="play-on-hov"><NavLink to={`/playlists/${playlist.id}`}><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png" /></NavLink></li>
                        <li className="p-title"><NavLink to={`/playlists/${playlist.id}`}>{playlist.title}</NavLink></li>
                        <li className="p-creator">{playlist.creatorName}</li>

                        {/* <NavLink to={`/playlists/${playlist.id}`}></NavLink> */}
                    </div>
                )
            })
            return (
            <div>
                <div className="username-show">Made for {currentUser}</div>
                <ul className="playlist-index">
                    {playlistsNew}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id].username,
        playlists: Object.values(state.entities.playlists)
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
    }
}

export default connect(msp, mdp)(UserShow)



    


    



