import { combineReducers } from 'redux'

import menuBarReducer from './MenubarReducer'
import menuListReducer from './MenuListReducer'
import customerReducer from './CustomerReducer';

const rootReducer = combineReducers({
    menuBarReducer,
    menuListReducer,
    customerReducer
});

export default rootReducer