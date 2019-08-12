import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal,closeModal } from '../../../actions/modal_actions';
import { createPlaylist, fetchPlaylists, addSongToPlaylist } from '../../../actions/playlist_actions';
import { NavLink, Link } from 'react-router-dom';


class AddToPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // songId: this.props.song.id,
            playlistId: null
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addSong = this.addSong.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    changeTitle(e) {
        this.setState({ title: e.target.value });
    }


    // redirect() {
    // this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    // }


    handleSubmit(e) {
        e.preventDefault();
        this.props.openModal('new-playlist');
        let playlist = this.state;
        // this.setState({ title: '' });
        this.props.createPlaylist(playlist)
            .then(this.props.closeModal);
        // .then(() => this.redirect());
    }


    addSong(playlist_id) {
        return (e) => {
        e.preventDefault();
        let song_id = this.state.song_id ;
        // this.setState({ title: '' });
        this.props.addSongToPlaylist(playlist_id, song_id)
            .then(this.props.closeModal)
            .then(() => this.redirectToShow(playlist_id));

        // .then(() => this.redirect());
        }
    }

    redirectToShow(playlist_id) {
        this.props.history.push(`/playlists/${playlist_id}`);
    }
    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }


    render() {
        let { closeModal, playlists, openModal, song } = this.props;


        return (
            <div className="modal">
                <img onClick={closeModal} id="close-play" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png" />
                <form className="playlist-form" onSubmit={this.handleSubmit} >
                    {/* onSubmit={this.handleSubmit} */}
                    <h2>Add to playlist</h2>
                        <button onClick={() => openModal('new-playlist')} className="yassplay" type="submit">NEW PLAYLIST</button>
                </form>
                        <ul className="addtoplayul">
                            {playlists.map((playlist, idx) => {
                                return (
                                    <div key={idx} className="playlist-link">
                                        <li><NavLink to={`/playlists/${playlist.id}`}><img id="cover-img" src={playlist.playlist_image} /></NavLink></li>
                                        <li onClick={() => this.addSong(playlist.id)} className="p-title">{playlist.title}</li>
                                        <li className="p-creator">{playlist.creatorName}</li>
                                        {/* <NavLink to={`/playlists/${playlist.id}`}></NavLink> */}
                                    </div>
                                )
                            })}
                        </ul>
                    {/* <div className="err">
                        {this.renderErrors()}
                    </div> */}
                    {/* <div className="playlist-input">
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
                    </div> */}
            </div>
        )
    }

}


// const msp = (state) => {
//     return {
//         last_playlist: state.entities.playlists[Object.keys(state.entities.playlists).length - 1],
//         errors: state.errors.playlist
//     }
// };

const msp = state => {
    return {
        playlists: Object.values(state.entities.playlists),
        errors: state.errors.playlist
    }
}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),

})

export default withRouter(connect(msp, mdp)(AddToPlay));