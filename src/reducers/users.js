import { RECEIVE_USERS, SAVE_USER } from "../actions/actionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.id]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
