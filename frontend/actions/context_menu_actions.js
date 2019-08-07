export const OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU';
export const CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU';

export const openContextMenu = payload => {
    return {
        type: OPEN_CONTEXT_MENU,
        payload
    };
};

export const closeContextMenu = () => {
    return {
        type: CLOSE_CONTEXT_MENU
    };
};
