import { HeaderComActionTypes } from '../actions'

const initialState = {
    isClicked: false
};

function menuBarReducer(state = initialState, action) {
    switch(action.type) {
        case HeaderComActionTypes.SHOW_MENU_BAR:
            return Object.assign({}, state, {
                isClicked: true
            });
        case HeaderComActionTypes.HIDE_MENU_BAR:
            return Object.assign({}, state, {
                isClicked: false
            });
        default:
            return state;
    }
}
export default menuBarReducer