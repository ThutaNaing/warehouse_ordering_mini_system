import { combineReducers } from 'redux'

import menuBarReducer from './MenubarReducer'
import menuListReducer from './MenuListReducer'

const rootReducer = combineReducers({
    menuBarReducer,
    menuListReducer
});

export default rootReducer