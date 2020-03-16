import {combineReducers} from 'redux';
//import tabBarReducer from './tabBar.reducer'
import teleReducer from './tele.reducer';
import loadDataReducer from './loadData.reducer';

export default combineReducers({
    teleReducer,
    loadDataReducer
})