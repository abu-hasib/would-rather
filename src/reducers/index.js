import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./auth";
import polls from "./polls";

export default combineReducers({ users, authedUser, polls });
