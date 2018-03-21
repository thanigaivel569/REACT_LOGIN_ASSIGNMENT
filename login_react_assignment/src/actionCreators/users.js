import * as userActionTypes from '../actionTypes/users'

export function FRGTPWD(user) {
  return {
    type: userActionTypes.FRGTPWD,
    user
  }
}