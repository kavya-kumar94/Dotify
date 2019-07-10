import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../actions/playlist_actions'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (this.props.playlist === undefined) return null;
        const { playlist } = this.props;
        let newPlaylist = (
            <div>
                <li>{playlist.title}</li>
                <li>{playlist.creator}</li>
            </div>
        )

        return (
        <div>
            {newPlaylist}
        </div>
        )
    }
}


const msp = (state, ownProps) => {
    const playlist= state.entities.playlists[ownProps.match.params.playlistId];

    return {
        playlist: playlist,
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    }
}

export default connect(msp,mdp)(PlaylistShow);

