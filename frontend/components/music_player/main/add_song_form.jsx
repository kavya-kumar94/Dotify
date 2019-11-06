import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { addSongToPlaylist } from '../../../actions/playlist_actions';
import { receiveSongId } from '../../../actions/song_actions';
import { saveSong } from '../../../actions/like_actions';


class AddSongForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     songId: this.props.song.id
        // }
        this.likeSong = this.likeSong.bind(this);
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

    songAdd(songId) {
        this.props.openModal("add-to-play");
        this.props.receiveSongId(songId);
    }

    likeSong() {
        this.props.saveSong(this.props.userId, this.props.songId)
        this.props.closeModal()
        alert('Song has been added to your likes')
    }


    render() {
        let { closeModal, openModal, songId, userId } = this.props;

        return (
            <div style={{ display: 'inline-block'}} className="contextMenu3">
                {/* <img onClick={closeModal} id="context-cancel" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png" /> */}
                <form className="rem-song-form" onSubmit={this.handleSubmit}>
                    <h1 onClick={() => this.songAdd(songId)}>Add to Playlist</h1>
                    <h1 onClick={() => this.likeSong(userId, songId)}>Save to Likes</h1>

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
        userId: state.session.id
    }
};


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveSongId: (songId) => dispatch(receiveSongId(songId)),
    saveSong: (userId, songId) => dispatch(saveSong(userId, songId))
})

export default withRouter(connect(msp, mdp)(AddSongForm));