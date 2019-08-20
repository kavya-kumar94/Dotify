import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylist, clearPlaylistErrors } from '../../actions/playlist_actions';
import {fetchAllPlaylists } from '../../actions/all_playlists_actions';

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

    componentDidMount() {
        this.props.clearPlaylistErrors();
    }

    // redirect() {
        // this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    // }


    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state;
        // this.setState({ title: '' });
        this.props.createPlaylist(playlist)
            .then(this.props.closeModal)
            .then(this.props.fetchAllPlaylists);
            // .then(() => this.redirect());
    }

    renderErrors() {
        if(this.props.errors) {
            return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
        };
    }


    render() {
        let { closeModal } = this.props;

            
        return (
            <div className="modal">
                <button id="modal-cancel" onClick={closeModal}><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png"/></button>
                <form className="playlist-form" onSubmit={this.handleSubmit}>
                    <h1>Create new playlist</h1>
                    <div className="err">
                        {this.renderErrors()}
                    </div>
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


const msp = (state) => {
    return{
        last_playlist: state.entities.playlists[Object.keys(state.entities.playlists).length-1],
        errors: state.errors.playlist,
        allPlaylists: state.entities.allPlaylists
    }
};


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
    fetchAllPlaylists: ()=> dispatch(fetchAllPlaylists())
})

export default withRouter(connect(msp, mdp)(NewPlaylistForm));