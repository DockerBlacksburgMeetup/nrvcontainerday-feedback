import {combineReducers} from "redux";
import auth from "./auth";
import sessions from "./sessions";
import feedback from "./feedback";

export default combineReducers({
  auth,
  sessions,
  feedback,
});