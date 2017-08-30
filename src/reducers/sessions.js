import {SET_SESSIONS} from "../constants";

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SESSIONS:
      return action.payload.sessions;
    default:
      return state;
  }
}
