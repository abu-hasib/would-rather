import { SET_USER } from "../actions/actionTypes";

export default function reducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.id;
    default:
      return state;
  }
}
