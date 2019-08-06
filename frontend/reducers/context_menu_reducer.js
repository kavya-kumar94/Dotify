import { OPEN_CONTEXT_MENU, CLOSE_CONTEXT_MENU } from '../actions/context_menu_actions';

export default function modalPlaylistReducer(state = null, action) {
    switch (action.type) {
        case OPEN_CONTEXT_MENU:
            return action.context;
        case CLOSE_CONTEXT_MENU:
            return null;
        default:
            return state;
    }
}