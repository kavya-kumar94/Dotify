import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../actions/playlist_actions'
class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist();
    }

    render() {
        const { playlist } = this.props;
        let newPlaylist = (
            <div>
                <li>{playlist.title}</li>
                <li>{playlist.creatorName}</li>
            </div>
        )

        return {newPlaylist}
    }
}


const msp = state => {
    return{
        playlist: state.entities.playlists[playlistId],
        // creator: (state.entities.playlist[playlistId]).creatorName
    }
}

export default connect(msp,null)(PlaylistShow);

