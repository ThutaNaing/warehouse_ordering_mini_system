import {LeftMenuComActionType} from '../actions'

const initialState = {
    isClicked: false
};

function menuListReducer(state = initialState, action) {
    switch(action.type) {
        case LeftMenuComActionType.SHOW_CUSTOMER_FORM:
            return Object.assign({}, state, {
                isClicked: true
            });
        case LeftMenuComActionType.HIDE_CUSTOMER_FORM:
            return Object.assign({}, state, {
                isClicked: false
            });
        default:
            return state;
    }
}
export default menuListReducer