import { createStore, applyMiddleware } from "redux";
//import { createStore } from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from './reducers/combineReducers';


const store = createStore(
    combineReducers, 
    applyMiddleware(thunk)
    );

export default store;