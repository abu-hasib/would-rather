import { RECEIVE_USERS, SET_USER } from "./actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function setAuthedUser(id) {
  return {
    type: SET_USER,
    id,
  };
}
