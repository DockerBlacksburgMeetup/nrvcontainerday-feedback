import {FEEDBACK_FAILURE, FEEDBACK_SUCCESS, SET_SESSIONS, SUBMIT_FEEDBACK} from "../constants";

const defaultState = { sessions: {}, lastResultSuccess : null, };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SESSIONS:
      return {
        ...state,
        sessions : action.payload.sessions
          .map(session => session.id)
          .reduce((ongoing, value) => ({...ongoing, [value] : false}), {})
      };
    case SUBMIT_FEEDBACK:
      return { ...state, lastResultSuccess : null };
    case FEEDBACK_SUCCESS:
      return Object.assign({}, state, { lastResultSuccess : true, sessions : { ...state.sessions, [action.id] : true }});
    case FEEDBACK_FAILURE:
      return { ...state, lastResultSuccess : false };
    default:
      return state;
  }
}
