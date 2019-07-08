import * as GenreApiUtil from '../util/genre_api_util'

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

export const receiveGenre = ( genre ) => {
    return {
        type: RECEIVE_GENRE,
        genre
    };
};

export const receiveGenres = ( genres ) => {
    return {
        type: RECEIVE_GENRES,
        genres
    };
};


export const fetchGenre = (id) => dispatch => {
    return GenreApiUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
}

export const fetchGenres = () => dispatch => {
    return GenreApiUtil.fetchGenres().then(genres => dispatch(receiveGenres(genres)))
}