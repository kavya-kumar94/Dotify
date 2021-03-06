import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../../actions/album_actions';
import { NavLink } from 'react-router-dom';
import AlbumShowItem from './album_show_item';
import { clearPlaylistSongs } from '../../../actions/song_actions';
import { setCurrentSong, setQueue, toggleSong, addToQueue } from '../../../actions/player_actions';
import { clearPlaylistErrors } from '../../../actions/playlist_actions';


class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loveIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"
        };
        this.love = this.love.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.unlove = this.unlove.bind(this);
    }

    love() {
        this.setState({
            loveIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_filled.png"
        })
    }

    unlove() {
        this.setState({
            loveIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"
        })
    }

    handlePlay() {
        this.props.setCurrentSong(this.props.song);
        // this.props.setQueue(this.props.queue);
        this.props.toggleSong();
    }

    componentDidMount() {
        this.props.clearPlaylistSongs();
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    play(e) {
        // let audio = new Audio(`${this.props.song.audio}`);
        // audio.play();
    }


    render() {
        if (this.props.album === undefined) return null;
        const { album, songs, setCurrentSong } = this.props;
        let classfile = this.props.errors.length > 0 ? "alert" : "classno"

        let newAlbum = (
            <div className="alb-sho">
            <div className="album-show">
                    <li id="show-img" className="alb-img"><NavLink to={`/albums/${album.id}`}><img id="show-img" src={album.album_image}/></NavLink></li>
                <h2>{album.title}</h2>
                <li className="artist-hov"><NavLink to={`/artists/${album.artist_id}`}>{album.artist_name}</NavLink></li>
                    <button onClick={() => setCurrentSong(Object.values(songs)[0])} className="play-btn">PLAY</button>
                    <div className="song-count">{album.year} • {songs.length} SONGS</div>
                {/* <div className="song-count"></div> */}
                <div className="album-pics">
                        <img onClick={this.state.loveIcon === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png" ? this.love : this.unlove} className="like-album" src={this.state.loveIcon} />
                    <img className="extra-album" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/3dots.png"/>
                </div>
            </div>
            <div className="songs-list">
                        <div className="track6">
                            {songs.map((song,idx) => {
                                return <AlbumShowItem key={idx} song={song} />
                            })}
                        </div>
                    
                        
            </div>
        </div>
        )

        return (
            <div className="div-margin">
                {newAlbum}
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const albumId = ownProps.match.params.albumId;
    const album = state.entities.albums[albumId];
    const albumsongs = Object.values(state.entities.songs).filter(song => song.album_id == albumId);
    const songIds = albumsongs.map(song => song.id);
    let songs = [];
    Object.values(state.entities.songs).forEach(track => songIds.includes(track.id) ? songs.push(track) : null) 

    return {
        album: album,
        albumId: albumId,
        songs: songs,
        currentSong: state.ui.playStatus.currentSong,
        errors: state.errors.playlist
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
        setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
        toggleSong: () => (dispatch(toggleSong())),
        setQueue: (queue) => (dispatch(setQueue(queue))),
        clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
        clearPlaylistSongs: () => dispatch(clearPlaylistSongs()),
    }
}

export default connect(msp, mdp)(AlbumShow);

