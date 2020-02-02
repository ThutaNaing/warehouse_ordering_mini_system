import {CustomerActionType} from '../actions'

const initialState = {
    isClicked: false,
    custTblDataArry: []
};

function customerReducer(state = initialState, action) {
    switch(action.type) {
        case CustomerActionType.SHOW_CUST_TABLE_PANEL:
            return Object.assign({}, state, {
                custTablePanelClicked: true,
                custTblDataArry: state.custTblDataArry.concat(action.dataJson)
            });
        case CustomerActionType.HIDE_CUST_TABLE_PANEL:
            return Object.assign({}, state, {
                custTablePanelClicked: false,
                custTblDataArry: state.custTblDataArry.concat(action.dataJson)
            });
        case CustomerActionType.DATA_INJECT_TBL:
            return Object.assign({}, state, {
                custTblDataArryHappened: true,
                custTblDataArry: state.custTblDataArry.concat(action.dataJson)
            });
        default:
            return state;
    }
}
export default customerReducer