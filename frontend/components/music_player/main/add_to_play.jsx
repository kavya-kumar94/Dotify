import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal,closeModal } from '../../../actions/modal_actions';
import { createPlaylist, fetchPlaylists, addSongToPlaylist, clearPlaylistErrors, clearPlaylistSongs } from '../../../actions/playlist_actions';
import { receiveSongId } from '../../../actions/song_actions';
import { NavLink, Link } from 'react-router-dom';


class AddToPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songId: this.props.songId,
            playlist_id: null
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addSong = this.addSong.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
        this.props.clearPlaylistErrors();
    }

    changeTitle(e) {
        this.setState({ title: e.target.value });
    }


    // redirect() {
    // this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
    // }
    componentWillReceiveProps(nextProps) {
        debugger;
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.openModal('new-playlist');
        let playlist = this.state;
        // this.setState({ title: '' });
        this.props.createPlaylist(playlist)
            .then(this.props.closeModal);
        // .then(() => this.redirect());
    }

    renderErrors() {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 6000);
        if (this.props.errors) {
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
    }

    addSong(playlist, songId) {
        // this.setState({
        //     songId: songId,
        //     playlist_id: playlist_id
        // })
        return (e) => {
        // let playlistsong = { songId: songId, playlist_id: playlist_id }
        e.preventDefault();
        this.props.addSongToPlaylist(playlist, songId)
            .then(() => this.props.closeModal())
            .then(() => this.redirectToShow(playlist.id))
            .then(()=> this.props.clearPlaylistSongs())

        // .then(() => this.redirect());
        }
    }

    redirectToShow(playlist_id) {
        this.props.history.push(`/playlists/${playlist_id}`);
    }


    render() {
        let { closeModal, playlists, openModal, songId } = this.props;

        let classfile = this.props.errors.length > 0 ? "alert" : "classno"
        return (
            <div className="modal">
                <img onClick={closeModal} id="close-play" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/cancel-logo.png" />
                <form className="playlist-form" onSubmit={this.handleSubmit} >
                    {/* onSubmit={this.handleSubmit} */}
                    <h2>Add to playlist</h2>
                        <button onClick={() => openModal('new-playlist')} className="yassplay" type="submit">NEW PLAYLIST</button>
                </form>
                <div className="error-div">
                    {console.log(this.props.errors)}
                    <div class={classfile} role="alert">
                        {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"></span></button> */}
                        {this.renderErrors()}
                    </div>
                </div>

                        <ul className="addtoplayul">
                            {playlists.map((playlist, idx) => {
                                return (
                                    <div key={idx} className="playlist-link">
                                        <li onClick={this.addSong(playlist, songId)} ><img id="cover-img" src={playlist.playlist_image} /></li>
                                        {/* <span clasName="add-on-hov"><span class="spoticon-add-to-playlist-32"></span></span> */}
                                        <li onClick={this.addSong(playlist, songId)} className="add-on-hov"><i class="fas fa-plus-circle"></i></li>
                                        <li className="p-title">{playlist.title}</li>
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
//         // last_playlist: state.entities.playlists[Object.keys(state.entities.playlists).length - 1],
//         // errors: state.errors.playlist
//     }
// };

const msp = state => {
    return {
        songId: state.entities.addSong,
        playlists: Object.values(state.entities.playlists),
        errors: state.errors.playlist,
        songs: state.entities.songs
    }
}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    receiveSongId: (songId) => dispatch(receiveSongId(songId)),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
    clearPlaylistSongs: () => dispatch(clearPlaylistSongs()),
    addSongToPlaylist: (playlist, songId) => dispatch(addSongToPlaylist(playlist, songId)),

})

export default withRouter(connect(msp, mdp)(AddToPlay));