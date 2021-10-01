import { RECEIVE_POLLS } from "../actions/actionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    default:
      return state;
  }
}
