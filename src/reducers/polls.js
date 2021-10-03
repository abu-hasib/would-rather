import { ADD_POLL, RECEIVE_POLLS, SAVE_POLL } from "../actions/actionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case SAVE_POLL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat(action.voter),
          },
        },
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
