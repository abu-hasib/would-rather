import { RECEIVE_POLLS, SAVE_POLL } from "./actionTypes";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

export function savePolls(id, answer, voter) {
  return {
    type: SAVE_POLL,
    answer,
    id,
    voter,
  };
}
