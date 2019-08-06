export const OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU';
export const CLOSE_CONTEXT_MENU = 'CLOSE_CONTEXT_MENU';

export const openContextMenu = context => {
    return {
        type: OPEN_CONTEXT_MENU,
        context
    };
};

export const closeContextMenu = () => {
    return {
        type: CLOSE_CONTEXT_MENU
    };
};
