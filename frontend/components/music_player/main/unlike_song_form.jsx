import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { addSongToPlaylist, removeSongFromPlaylist, receivePlaylistId } from '../../../actions/playlist_actions';
import { receiveSongId } from '../../../actions/song_actions';
import { unsaveSong } from '../../../actions/like_actions';

class RemoveSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.songRemove = this.songRemove.bind(this);
        this.songAdd = this.songAdd.bind(this);
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    songRemove(likeId) {
        this.props.unsaveSong(likeId)
            .then(this.props.closeModal());
    }

    songAdd(songId) {
        this.props.openModal("add-to-play");
        this.props.receiveSongId(songId);
    }

    render() {
        let { closeModal, openModal, songId, likeId, removeSongFromPlaylist, playlistId } = this.props;
        return (
            <div style={{ display: 'inline-block' }} className="contextMenu2">
                <form className="rem-song-form" onSubmit={this.handleSubmit}>
                    <h1 onClick={() => this.songAdd(songId)}>Add to Playlist</h1>
                    <h1 onClick={() => this.songRemove(likeId)}> Remove from Likes</h1>
                </form>
            </div>
        )
    }

}


const msp = (state) => {
    let songId= state.entities.addSong;
    let song = Object.values(state.entities.songs).filter(song => song.id === songId)
    let likeId = song[0].likeId
    return {
        songId,
        likeId,
        playlist: state.entities.playlists,
        playlistId: state.entities.addPlaylist,
    }
};


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveSongId: (songId) => dispatch(receiveSongId(songId)),
    receivePlaylistId: (playlistId) => dispatch(receivePlaylistId(playlistId)),
    unsaveSong: (likedSongId) => dispatch(unsaveSong(likedSongId)),
    removeSongFromPlaylist: (playlistId, songId) => dispatch(removeSongFromPlaylist(playlistId, songId))
})

export default withRouter(connect(msp, mdp)(RemoveSongForm));