import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { clearPlaylistSongs } from '../../../actions/song_actions'
import { fetchLikedSongs, saveSong, unsaveSong } from '../../../actions/like_actions';
import LikeIndexItem from './like_index_item'
class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clearPlaylistSongs();
        this.props.fetchLikedSongs();
    }
     
    render() {
        let {likes} = this.props
        return (
            <div className="track6">
                {likes.map((like, idx) => {
                    return <LikeIndexItem key={idx} like={like} />
                })}
            </div>
               
        )
    }
}


export const msp = state => {
    return {
        likes: Object.values(state.entities.likes)
    }
}

export const mdp = dispatch => {
    return {
        fetchLikedSongs: () => dispatch(fetchLikedSongs()),
        clearPlaylistSongs: () => dispatch(clearPlaylistSongs()),
        saveSong: (userId, songId) => dispatch(saveSong(userId, songId)),
        unsaveSong: (likedSongId) => dispatch(unsaveSong(likedSongId))
    }
}
export default connect(msp,mdp)(LikesIndex);