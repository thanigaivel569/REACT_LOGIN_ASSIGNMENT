import usersReducer from './users';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({

  usersState: usersReducer

});

export default rootReducer;