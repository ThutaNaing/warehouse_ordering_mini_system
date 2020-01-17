import {LeftMenuComActionType} from '../actions'

const initialState = {
    isClicked: false
};

function menuListReducer(state = initialState, action) {
    switch(action.type) {
        case LeftMenuComActionType.SHOW_CUSTOMER_FORM:
            return Object.assign({}, state, {
                customerEntryFrmClicked: true
            });
        case LeftMenuComActionType.HIDE_CUSTOMER_FORM:
            return Object.assign({}, state, {
                customerEntryFrmClicked: false
            });
        case LeftMenuComActionType.SHOW_ITEM_ENTRY_FORM:
            return Object.assign({}, state, {
                itemEntryFrmClicked: true
            });
        case LeftMenuComActionType.HIDE_ITEM_ENTRY_FORM:
            return Object.assign({}, state, {
                itemEntryFrmClicked: false
            });
        default:
            return state;
    }
}
export default menuListReducer