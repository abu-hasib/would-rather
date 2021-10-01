import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";

export default function handleInitData() {
  return (dispatch, getState) => {
    _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
    _getQuestions().then((questions) => dispatch(receivePolls(questions)));
  };
}
