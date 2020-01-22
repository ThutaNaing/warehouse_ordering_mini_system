import {CustomerActionType} from '../actions'

const initialState = {
    isClicked: false
};

function customerReducer(state = initialState, action) {
    switch(action.type) {
        case CustomerActionType.SHOW_CUST_TABLE_PANEL:
            return Object.assign({}, state, {
                custTablePanelClicked: true
            });
        case CustomerActionType.HIDE_CUST_TABLE_PANEL:
            return Object.assign({}, state, {
                custTablePanelClicked: false
            });
        default:
            return state;
    }
}
export default customerReducer