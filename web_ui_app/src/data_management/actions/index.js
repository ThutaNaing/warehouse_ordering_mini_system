export const HeaderComActionTypes = {
    SHOW_MENU_BAR: 'SHOW_MENU_BAR',
    HIDE_MENU_BAR: 'HIDE_MENU_BAR'
};

export function showMenu(isClicked) {
    return {
        type: HeaderComActionTypes.SHOW_MENU_BAR, isClicked
    }
}

export function hideMenu(isClicked) {
    return {
        type: HeaderComActionTypes.HIDE_MENU_BAR, isClicked
    }
}