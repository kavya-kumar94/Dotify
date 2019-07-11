import * as SearchAPIUtil from '../util/search_api_util';


export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = (results) => {
    let { artists } = results;
    let { albums } = results;
    return {
        type: RECEIVE_SEARCH_RESULTS,
        artists,
        albums
    }

}


export const fetchSearchResults = (input) => dispatch => (
    SearchAPIUtil.fetchSearchResults(input).then(
        results => dispatch(receiveSearchResults(results))
    )
);
