import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchLikedSongs, saveSong, unsaveSong } from '../../../actions/like_actions';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        return "HIII"
    }
}

export default LikesIndex;