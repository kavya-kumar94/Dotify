import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchLikedSongs, saveSong, unsaveSong } from '../../../actions/like_actions';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLikedSongs();
    }
     
    render() {
        let {likes} = this.props
        return (
            <ul>
                {likes.map(like => {
                    return like.title
                })}
            </ul>
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
        saveSong: (userId, songId) => dispatch(saveSong(userId, songId)),
        unsaveSong: (likedSongId) => dispatch(unsaveSong(likedSongId))
    }
}
export default connect(msp,mdp)(LikesIndex);