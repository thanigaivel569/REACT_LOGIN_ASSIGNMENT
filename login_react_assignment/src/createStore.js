import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { default as thunk } from "redux-thunk";
import { Map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension';


let initialState = {
  usersState: Map({ isLoggedIn: false, firstName: '', lastName: '' })
};

const store = createStore(  initialState, composeWithDevTools(
  applyMiddleware(thunk, createLogger())));


export default store;

