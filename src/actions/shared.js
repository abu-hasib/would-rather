import { _getUsers } from "../utils/_DATA";
import { receiveUsers } from "./users";

export default function handleInitData() {
  return (dispatch, getState) => {
    const state = getState();
    console.log("Here!: ", state);
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
