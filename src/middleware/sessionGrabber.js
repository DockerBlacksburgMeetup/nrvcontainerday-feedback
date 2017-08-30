import {APP_INIT} from "../constants";
import {setSessions} from "../actions/setSessions";

export const sessionGrabber = ({ getState, dispatch }) => next => action => {
  if (action.type !== APP_INIT)
    return next(action);

  fetch("https://nrvcontainerday.io/sessions.json")
      .then((response) => response.json())
      .then((sessions) => dispatch(setSessions(sessions)));

  next(action);
};