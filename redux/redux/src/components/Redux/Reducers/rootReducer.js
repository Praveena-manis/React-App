import {combineReducers} from 'redux';
import itemReducer from './ItemReducer';


const rootReducer=combineReducers({
    itemReducer:itemReducer
})

export default rootReducer