import { RECEIVE_POLLS } from "./actionTypes";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}
