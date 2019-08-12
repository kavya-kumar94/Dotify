import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { addSongToPlaylist } from '../../../actions/playlist_actions';

class AddSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeTitle(e) {
        this.setState({ title: e.target.value });
    }


    // redirect() {
    // this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    // }


    handleSubmit(e) {
        e.preventDefault();
        let {song, playlist} = this.props;
        // this.setState({ title: '' });
        this.props.addSongToPlaylist(playlist.id, song.id)
            .then(this.props.closeContextMenu);
        // .then(() => this.redirect());
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


    render() {
        let { closeModal, openModal } = this.props;

        return (
            <div style={{ display: 'inline-block' }} className="contextMenu">
                {/* <img onClick={closeModal} id="context-cancel" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png" /> */}
                <form className="add-song-form" onSubmit={this.handleSubmit}>
                    <h1 onClick={() => openModal("add-to-play")}>Add to Playlist</h1>
                    <h1>Remove from Playlist</h1>

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
       playlists:  state.entities.playlists
    }
};


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),
})

export default withRouter(connect(null, mdp)(AddSongForm));