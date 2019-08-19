import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { addSongToPlaylist, removeSongFromPlaylist, receivePlaylistId } from '../../../actions/playlist_actions';
import { receiveSongId } from '../../../actions/song_actions';

class RemoveSongForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     songId: this.props.song.id
        // }
        this.songRemove = this.songRemove.bind(this);
        this.songAdd = this.songAdd.bind(this);
    }



    // redirect() {
    // this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    // }




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

    songRemove(playlistId, songId) {
        // this.props.receiveSongId(songId);
        // this.props.receivePlaylistId(playlistId);
        // .then(() => 
        this.props.removeSongFromPlaylist(this.props.playlistId, this.props.songId)
        .then(this.props.closeModal());
    }
    
    songAdd(songId) {
        this.props.openModal("add-to-play");
        this.props.receiveSongId(songId);
    }

    render() {
        let { closeModal, openModal, songId, removeSongFromPlaylist, playlistId } = this.props;
        debugger;
        return (
            <div style={{ display: 'inline-block' }} className="contextMenu2">
                {/* <img onClick={closeModal} id="context-cancel" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png" /> */}
                <form className="rem-song-form" onSubmit={this.handleSubmit}>
                    <h1 onClick={() => this.songAdd(songId)}>Add to Playlist</h1>
                    <h1 onClick={() => this.songRemove(playlistId, songId)}> Remove from Playlist</h1>

                    {/* <div className="err">
                        {this.renderErrors()}
                    </div> */}

                    {/* ]                    <div className="modal-buttons">
                        <button className="canc-play" onClick={closeModal}>CANCEL</button>
                        <button className="yesplay" type="submit">CREATE</button>
                    </div> */}
                </form>
            </div>
        )
    }

}


const msp = (state) => {
    return {
        songId: state.entities.addSong,
        playlist: state.entities.playlists,
        playlistId: state.entities.addPlaylist,
    }
};


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveSongId: (songId) => dispatch(receiveSongId(songId)),
    receivePlaylistId: (playlistId) => dispatch(receivePlaylistId(playlistId)),
    removeSongFromPlaylist: (playlistId, songId) => dispatch(removeSongFromPlaylist(playlistId, songId))
})

export default withRouter(connect(msp, mdp)(RemoveSongForm));