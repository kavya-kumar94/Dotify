import { NEXT_SONG, PREVIOUS_SONG } from '../../actions/queue_actions';
import { merge } from 'lodash';

const queueIndexReducer = (state = 0, action) => {

    switch (action.type) {
        case PREVIOUS_SONG:
        case NEXT_SONG:
            return action.numIndex;
        // return merge({}, state, {queueIndex: action.numIndex});
        default:
            return state;
    }
}


export default queueIndexReducer;