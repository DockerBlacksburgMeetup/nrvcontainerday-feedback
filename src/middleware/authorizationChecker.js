import {CHECK_AUTHORIZATION} from "../constants";
import {setAuthentication} from "../actions/setAuthentication";
import {authenticationFailure} from "../actions/authenticationFailure";
import {authCheck} from "../services/api";


export const authorizationChecker = ({ getState, dispatch }) => next => action => {
  if (action.type !== CHECK_AUTHORIZATION)
    return next(action);

  // Delay for the heck of it...
  setTimeout(async () => {
    const userId = action.payload.userId;
    const password = action.payload.password;

    const success = await authCheck(userId, password);
    if (success)
      dispatch(setAuthentication(userId, password));
    else
      dispatch(authenticationFailure());
  }, 500);

  next(action);
};