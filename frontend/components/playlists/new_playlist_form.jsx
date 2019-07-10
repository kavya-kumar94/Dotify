import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylist } from '../../actions/playlist_actions';

class NewPlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeTitle(e) {
        this.setState({title: e.target.value});
    }


    redirect() {
        this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    }


    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state;
        // this.setState({ title: '' });
        this.props.createPlaylist(playlist)
            .then(this.props.closeModal)
            .then(() => this.redirect());
    }



    render() {
        let { closeModal } = this.props;
        return (
            <div className="modal">
                <button className="modal-cancel" onClick={closeModal}><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png"/></button>
                <form className="playlist-form" onSubmit={this.handleSubmit}>
                    <h1>Create new playlist</h1>
                    <div className="playlist-input">
                        <label>Playlist Name</label>
                        <input
                            type="text"
                            id="playlist-mod"
                            value={this.state.title}
                            onChange={this.changeTitle}
                            placeholder="New Playlist"
                        >
                        </input>
                    </div>
                    <div className="modal-buttons">
                        <button className="canc-play" onClick={closeModal}>CANCEL</button>
                        <button className="yesplay" type="submit">CREATE</button>
                    </div>
                </form>
            </div>
        )
    }

}


const msp = (state) => ({
    last_playlist: state.entities.playlists[Object.values(state.entities.playlists).length-1]
});


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
})

export default withRouter(connect(msp, mdp)(NewPlaylistForm));