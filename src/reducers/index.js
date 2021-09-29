import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./auth";

export default combineReducers({ users, authedUser });
