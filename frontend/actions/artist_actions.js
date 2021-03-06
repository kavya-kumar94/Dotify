import * as ArtistApiUtil from '../util/artist_api_util'

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";


export const receiveArtist = (payload) => {
    return {
        type: RECEIVE_ARTIST,
        payload
    }
}

export const receiveArtists = (artists) => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const fetchArtist = (artistId) => dispatch => {
    return ArtistApiUtil.fetchArtist(artistId).then( artist => dispatch(receiveArtist(artist)))
}

export const fetchArtists = () => dispatch => {
    return ArtistApiUtil.fetchArtists().then( artists => dispatch(receiveArtists(artists)))
}