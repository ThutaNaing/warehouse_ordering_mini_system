import {HeaderComActionTypes} from '../actions'

const initialState = {
    isClicked: false,
    loginFormBtnClicked: false,
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
        case HeaderComActionTypes.SHOW_LOGIN_FORM:
            return Object.assign({}, state, {
                loginFormBtnClicked: true
            });
        case HeaderComActionTypes.HIDE_LOGIN_FORM:
            return Object.assign({}, state, {
                loginFormBtnClicked: false
            });
        default:
            return state;
    }
}
export default menuBarReducer