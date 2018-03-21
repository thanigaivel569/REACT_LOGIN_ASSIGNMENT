import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import { Map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let initialState = {

  usersState: Map({ isLoggedIn: false, firstName: '', lastName: '' })
};

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(thunk, createLogger())));


export default store;

