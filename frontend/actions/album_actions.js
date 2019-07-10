import * as AlbumApiUtil from '../util/album_api_util'

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"

export const receiveAlbum = ( payload ) => {
    return {
        type: RECEIVE_ALBUM,
        payload
    };
};

export const receiveAlbums = ( albums ) => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    };
};


export const fetchAlbum = (albumId) => dispatch => {
    return AlbumApiUtil.fetchAlbum(albumId).then( album => dispatch(receiveAlbum(album)))
}

export const fetchAlbums = () => dispatch => {
    return AlbumApiUtil.fetchAlbums().then( albums => dispatch(receiveAlbums(albums)))
}