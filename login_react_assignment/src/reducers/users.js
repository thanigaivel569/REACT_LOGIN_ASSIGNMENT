import * as userActionTypes from '../actionTypes/users';
import {Map} from 'immutable';

export default (prevState = {}, action) => {
  switch (action.type) {
    case userActionTypes.FRGTPWD:
      return new Map(action);
    default:
      return prevState;
  }
}