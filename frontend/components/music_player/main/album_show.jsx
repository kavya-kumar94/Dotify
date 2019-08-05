import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../../actions/album_actions'
import { NavLink } from 'react-router-dom'
class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loveIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"
        };
        this.love = this.love.bind(this);
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

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    play(e) {
        // let audio = new Audio(`${this.props.song.audio}`);
        // audio.play();
    }

    render() {
        if (this.props.album === undefined) return null;
        const { album, songs } = this.props;
        let newAlbum = (
            <div className="alb-sho">
            <div className="album-show">
                <li className="alb-img"><NavLink to={`/albums/${album.id}`}><img src={album.album_image}/></NavLink></li>
                <h2>{album.title}</h2>
                <li className="artist-hov"><NavLink to={`/artists/${album.artist_id}`}>{album.artist_name}</NavLink></li>
                <button className="play-btn">PLAY</button>
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
                                return <div key={idx} className="art-song">
                                    <div className="parent">
                                        <div className="track5">
                                            <img id="art-note" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png" />
                                            <li id="song-title">{song.title}</li>
                                            <li>{album.artist_name}</li>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="stitle"> */}
                                        {/* </div> */}
                                        {/* <div id="duration"> */}
                                        <div>
                                            <li>{song.duration}</li>
                                        </div>
                                    </div>
                                </div>
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
        songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
    }
}

export default connect(msp, mdp)(AlbumShow);

