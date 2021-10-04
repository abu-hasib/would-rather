import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { ADD_POLL, RECEIVE_POLLS, SAVE_POLL } from "./actionTypes";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

export function savePoll({ authedUser, qid, answer }) {
  return {
    type: SAVE_POLL,
    authedUser,
    qid,
    answer,
  };
}

export function handleSavePoll(payload) {
  return (dispatch) => {
    dispatch(savePoll(payload));
    return _saveQuestionAnswer(payload).catch((err) =>
      console.error("$: ", err)
    );
  };
}

export function addPoll(question) {
  return {
    type: ADD_POLL,
    question,
  };
}

export function handleAddPoll(question) {
  return (dispatch) => {
    dispatch(addPoll(question));
    return _saveQuestion(question).catch((err) => console.error("$: ", err));
  };
}
