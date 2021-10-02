import { RECEIVE_USERS, SAVE_USER, SET_USER } from "./actionTypes";

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

export function saveUser(id, answer, user) {
  return {
    type: SAVE_USER,
    id,
    answer,
    user,
  };
}
