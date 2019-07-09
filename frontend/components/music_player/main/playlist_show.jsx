import React from 'react';
import { fetchPlaylist } from '../../../actions/playlist_actions'
class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist();
    }

    render() {

    }
}

