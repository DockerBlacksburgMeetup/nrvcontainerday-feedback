import {AUTHENTICATION_FAILURE, SET_AUTHENTICATION, SIGN_OUT} from "../constants";
const defaultState = {
  authenticated : false,
  authToken : null,
  failureCount : 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return Object.assign({}, { authenticated : true, authToken : action.payload.authToken });
    case AUTHENTICATION_FAILURE:
      return Object.assign({}, { failureCount : state.failureCount + 1 });
    case SIGN_OUT:
      return Object.assign({}, defaultState);
    default:
      return state;
  }
}
