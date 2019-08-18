import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions'
import { setCurrentSong } from '../../../actions/player_actions'
import { NavLink } from 'react-router-dom'
import ArtistShowItem from './artist_show_item';
class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        if (this.props.artist === undefined) return null;
        const { artist, albums, songs, setCurrentSong } = this.props;
        let newArtist = (
            <div className="artist-show">
                <div className="artist-header">
                    <div id="art-img" className="bg-img">
                    <img className="artist-show-bg" id="art-img2" src={artist.artist_image} />
                </div>
                    <h2 className="artist-name">{artist.name}</h2>
                    <button onClick={() => setCurrentSong(Object.values(songs)[0])} className="play-btn">PLAY</button>


                <div className="art-sho">
                    <h3>Popular</h3>
                    <div className="track6">
                    {songs.map( (song,idx) => {
                        return <ArtistShowItem key={idx} song={song}/>
                    })}
                        </div>
                    <h3>Albums</h3>
                    <div className="albs3">

                    {albums.map( (album, idx) => {
                        return <div key={idx} className="alb-info2">
                            <li><NavLink to={`/albums/${album.id}`}><img id="cover-img" src={album.album_image} /></NavLink></li>
                            <li className="sho-on-hov"><NavLink to={`/albums/${album.id}`}><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png" style={{width:'60px',height:'60px'}}/></NavLink></li>
                                <li>{album.title}</li>
                                </div>
                                })}
                    </div>
                </div>
                </div>
            </div>
        )

        return (
            <div className="div-margin">
                {newArtist}
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    const artist = state.entities.artists[artistId];
    const albums = Object.values(state.entities.albums).filter(album => album.artist_id == artistId);
    const albumIds = albums.map(album => album.id);
    let songs = [];
    Object.values(state.entities.songs).forEach( song => albumIds.includes(song.album_id) ? songs.push(song) : null) 

    return {
        artist: artist,
        albums: albums,
        songs: songs,
        presentSong: state.ui.playStatus.currentSong
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
        setCurrentSong: (song) => dispatch(setCurrentSong(song))
    }
}

export default connect(msp, mdp)(ArtistShow);

