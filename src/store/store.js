import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers.js';
let store = createStore(
    combineReducers,
    applyMiddleware(thunk)
);

export default store;