import { combineReducers } from 'redux';

import users from './users_reducer';
import albums from './albums_reducer'
import artists from './artists_reducer';
import genres from './genres_reducer';
import playlist_errors from './playlist_errors_reducer';
import playlists from './playlists_reducer';
import songs from './songs_reducer';
import addSong from './add_song_reducer';
import addPlaylist from './add_playlist_reducer';
import allPlaylists from './all_playlists_reducer';
import likes from './likes_reducer';

export default combineReducers({
    users,
    albums,
    artists,
    // likes,
    genres,
    // playlist_errors,
    playlists,
    allPlaylists,
    songs,
    addSong,
    addPlaylist
});